#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <errno.h>
#include <signal.h> // For signal handling
#include <pthread.h>
#include <time.h>
#include <unistd.h>
#include <stdlib.h>
#include <math.h>
#include <sys/ioctl.h>
#include <linux/i2c-dev.h>
#include "shared.h"

// --- Configuration Constants ---
#define BRAM_PHYS_ADDR      0x80000000  // BRAM base physical address
#define BRAM_MAP_SIZE       0x2000      // BRAM mapping size (8KB)
#define BRAM_FLAG_OFFSET    15          // Offset of the flag word within BRAM (word index, i.e., 15 * 4 bytes = 0x3C)
#define BRAM_PARAM_COUNT    18          // Number of parameter words (excluding flag)

// Example DDR Address and Size (If needed for reading results)
#define DDR_PHYS_ADDR       0x3F600000
#define DDR_MAP_SIZE        0xA00000    // 10 MB

#define GPIO_PIN            993         // GPIO pin number (Confirm this!)
#define GPIO_PATH_MAX       64          // Max path length for sysfs files
#define POLL_INTERVAL_US    10000       // Polling interval in microseconds (10ms)
#define RESET_DELAY_US      50000       // Delay after reset signal in microseconds (50ms)


//i2c配置
#define I2C_DEVICE_PATH    "/dev/i2c-1"
#define STM32_SLAVE_ADDR   0x76

//DEBUG
#define DEBUG 1

//互斥锁和条件变量定义
static pthread_mutex_t event_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t event_cond = PTHREAD_COND_INITIALIZER;
static volatile int param_ack_received = 0;  // 中断事件标志

// 新增第二组互斥锁和条件变量
static pthread_mutex_t fdma_event_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t fdma_event_cond = PTHREAD_COND_INITIALIZER;
static volatile int fdma_end = 0;  // fdma中断事件标志

// 轮询bram_flag=2的互斥锁
pthread_mutex_t flag_2_mutex = PTHREAD_MUTEX_INITIALIZER;

//轮询bram_flag=5的互斥锁
pthread_mutex_t flag_5_mutex = PTHREAD_MUTEX_INITIALIZER;

//动态二维数组全局变量
static int **ddr_data = NULL;    // 二维动态数组指针
static int *ddr_block = NULL;
static int data_size = 0;             // 每次读取数据量
static int current_cycle = 0;         // 当前存储位置

uint32_t params[BRAM_PARAM_COUNT];

//PARABOLIC
float delta_f;
uint32_t Nf = 0;
uint32_t Np;

// --- State Definition ---
typedef enum {
    PS_STATE_INIT,              // 0: Initial state, configure parameters
    PS_STATE_DEMOD_AND_FDMA,    // 2: Tell PL to start demodulation and fdma(set flag_bram = 3)
    PS_STATE_PARABOLIC,
    PS_STATE_RESET             // 5: Reset PL/System, prepare for next cycle
} PsState;

const char* state_names[] = {
    "INIT", 
    "DEMOD_AND_FDMA",
    "PARABOLIC",   
    "RESET"
};

// --- Global Variables ---
volatile uint32_t *bram_vaddr = NULL; // Mapped BRAM virtual address
int bram_fd = -1;                     // File descriptor for /dev/mem
int gpio_fd = -1;                     // File descriptor for GPIO value
volatile bool keep_running = true;    // Flag to control main loop termination

volatile int *ddr_vaddr = NULL;
int ddr_fd = -1;

volatile sig_atomic_t ipc_received;

// --- Function Prototypes ---
int setup_gpio(int pin);
int set_gpio_value(int fd, int value);
void cleanup_gpio(int pin, int fd);
int map_bram(off_t phys_addr, size_t size, volatile uint32_t** vaddr_ptr, int* fd_ptr);
void unmap_bram(volatile uint32_t* vaddr, size_t size, int fd);
int map_ddr(off_t phys_addr, size_t size, volatile int** vaddr_ptr, int* fd_ptr);
void unmap_ddr(volatile int* vaddr, size_t size, int fd);
void write_bram(volatile uint32_t* base, uint32_t offset, uint32_t value);
uint32_t read_bram(volatile uint32_t* base, uint32_t offset);
void signal_handler(int sig);
void print_state_change(PsState old_state, PsState new_state);
void* flag_2_monitor_thread(void* arg);
void* flag_5_monitor_thread(void* arg);
void param_ack_interrupt_handler();
void fdma_interrupt_handler();
void handler(int sig, siginfo_t *info, void *ucontext);
void free_ddr_storage();
int init_ddr_storage(int cycles, int size);

// --- Main Application ---
int main() {
    // --- Setup Signal Handler for graceful exit ---
    signal(SIGINT, signal_handler); // Handle Ctrl+C
    signal(SIGTERM, signal_handler);

    // --- Initialization ---
    printf("Initializing...\n");

    // Setup GPIO
    gpio_fd = setup_gpio(GPIO_PIN);
    if (gpio_fd < 0) {
        fprintf(stderr, "Error: Failed to initialize GPIO %d\n", GPIO_PIN);
        return EXIT_FAILURE;
    }
    printf("GPIO %d initialized.\n", GPIO_PIN);

    if (set_gpio_value(gpio_fd, 1) < 0) {
        fprintf(stderr, "Error: Failed to set GPIO %d\n to high", GPIO_PIN);
        return EXIT_FAILURE;
    }    

    // Map BRAM
    if (map_bram(BRAM_PHYS_ADDR, BRAM_MAP_SIZE, &bram_vaddr, &bram_fd) < 0) {
        fprintf(stderr, "Error: Failed to map BRAM\n");
        cleanup_gpio(GPIO_PIN, gpio_fd);
        return EXIT_FAILURE;
    }
#ifdef DEBUG
    printf("BRAM mapped successfully at virtual address %p\n", bram_vaddr);
#endif 

    // --- State Machine ---
    PsState current_state = PS_STATE_INIT;
    PsState next_state = PS_STATE_INIT;
    int ret;

    printf("Starting main loop...\n");
    while (keep_running) {
        // Update state if changed
        if (current_state != next_state) {
             //print_state_change(current_state, next_state);
             current_state = next_state;
        }

        switch (current_state) {
            case PS_STATE_INIT:
                // Set GPIO low 
                set_gpio_value(gpio_fd, 0);    

                //接收到前端信号，接收到信号后通知pl读取参数
                ipc_received = 0;
                struct sigaction sa;
                sa.sa_flags = SA_SIGINFO;
                sa.sa_sigaction = handler;
                sigemptyset(&sa.sa_mask);

                if (sigaction(SIGRTMIN, &sa, NULL) == -1) {
                    perror("sigaction");
                    exit(EXIT_FAILURE);
                }
                
                // 写 PID 到文件
                FILE *fp = fopen("/tmp/process2.pid", "w");
                if (!fp) {
                    perror("fopen");
                    exit(EXIT_FAILURE);
                }
                fprintf(fp, "%d", getpid());
                fclose(fp);
                printf("PL waiting signal to start\n");

                while(!ipc_received){
                    pause();
                }

                size_t shm1_size = sizeof(struct Channel1) + 15 * sizeof(uint32_t);
                int shm1_fd = shm_open(SHM_P1_TO_P2, O_RDWR, 0666);
                struct Channel1 *ch1 = mmap(NULL, shm1_size, PROT_READ, MAP_SHARED, shm1_fd, 0);
                printf("Process2: received from process1 (length=%zu):\n", ch1->length);
                size_t i;
                for (i = 0; i < ch1->length; ++i){
                    params[i] = ch1->data[i];
                    }

                Nf = 1;
                Np = params[0]/8;

                munmap(ch1, shm1_size);
                close(shm1_fd);

                //Write parameters to BRAM                   
                for (i = 0; i < 15; i++) {
                    write_bram(bram_vaddr, i, params[i]);
                    printf("%d\n",params[i]);
                }

                printf("\n");

                if (init_ddr_storage(Nf, Np) != 0) { 
                fprintf(stderr, "Error: DDR storage allocation failed\n");
                cleanup_gpio(GPIO_PIN, gpio_fd);
                return EXIT_FAILURE;
                }
                
                write_bram(bram_vaddr, BRAM_FLAG_OFFSET, 1);
                           
                // 创建线程去轮询bram_flag
                pthread_t tid_2;
                pthread_create(&tid_2, NULL, flag_2_monitor_thread, NULL);
                pthread_detach(tid_2);// 分离线程，自动回收资源

                // 进入事件等待
                struct timespec timeout;
                clock_gettime(CLOCK_REALTIME, &timeout);
                timeout.tv_sec += 1;  // 设置1秒超时

                pthread_mutex_lock(&event_mutex);
                int ret = 0;
                while (!param_ack_received && ret != ETIMEDOUT) {
                  ret = pthread_cond_timedwait(&event_cond, &event_mutex, &timeout);
                }

                if (param_ack_received) {
                    next_state = PS_STATE_DEMOD_AND_FDMA;
                    param_ack_received = 0;  // 重置标志
                } else if (ret == ETIMEDOUT) {
                    next_state = PS_STATE_RESET;
                }
                pthread_mutex_unlock(&event_mutex);
                break;
            
            case PS_STATE_DEMOD_AND_FDMA:
                // Signal PL to start demodulation/calculation
                write_bram(bram_vaddr, BRAM_FLAG_OFFSET, 3);
                usleep(1000);

                //创建线程去轮询bram_flag           
                pthread_t tid_5;
                pthread_create(&tid_5, NULL, flag_5_monitor_thread, NULL);
                pthread_detach(tid_5);// 分离线程，自动回收资源

                // 进入事件等待
                struct timespec ot;
                clock_gettime(CLOCK_REALTIME, &ot);
                ot.tv_sec += 1;  // 设置1秒超时

                pthread_mutex_lock(&fdma_event_mutex);
                int rc = 0;
                while (!fdma_end && rc != ETIMEDOUT) {
                    rc = pthread_cond_timedwait(&fdma_event_cond, &fdma_event_mutex, &ot);
                }
                
                if(rc == ETIMEDOUT) {
                    next_state = PS_STATE_RESET;
                } else if (fdma_end) {
                    // Read data from DDR 
                    data_size = Np;
                    map_ddr(DDR_PHYS_ADDR, DDR_MAP_SIZE, &ddr_vaddr, &ddr_fd);
                    
                    int i;
                    for(i = 0; i < Np; ++i){
                        printf("%d\n",ddr_vaddr[i]);
                    }
                    
                    if(ddr_vaddr && ddr_data) {
                        // 拷贝数据到动态数组
                        memcpy(ddr_data[current_cycle], (int*)ddr_vaddr, data_size * sizeof(int));                
                        }
                    unmap_ddr(ddr_vaddr, DDR_MAP_SIZE, ddr_fd);
                    next_state = PS_STATE_PARABOLIC;
                    fdma_end = 0;

                }else {
                    printf("Unexpected condition in DEMOD_AND_FDMA, defaulting to RESET\n");
                    next_state = PS_STATE_RESET;
                }

                pthread_mutex_unlock(&fdma_event_mutex);
                break;

            case PS_STATE_PARABOLIC:{
                
                printf("starting parabolic......\n");

                uint32_t original_Nf = 1;
                size_t shm2_size = sizeof(struct Channel2) + Np * sizeof(int);
                int shm2_fd = shm_open(SHM_P2_TO_P1, O_CREAT | O_RDWR, 0666);
                ftruncate(shm2_fd, shm2_size);
                struct Channel2 *ch2 = mmap(NULL, shm2_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm2_fd, 0);

                ch2->arr1_len = Np;
               
                //ddr数据放共享内存
                int *arr2 = &ch2->data[0];
                // 拷贝整个ddr数据
                memcpy(arr2, ddr_block, original_Nf * data_size * sizeof(int));                
                
                FILE *pidfp;
                pid_t pid1 = 0;
                while ((pidfp = fopen("/tmp/process1.pid", "r")) == NULL) {
                    usleep(10000); // 10ms
                }
                fscanf(pidfp, "%d", &pid1);
                fclose(pidfp);

                kill(pid1, SIGRTMIN);
                // 解除映射
                munmap(ch2, shm2_size);

                // 关闭文件描述符
                close(shm2_fd);   

                next_state = PS_STATE_RESET;

                break;
            }

            case PS_STATE_RESET:

                // Set GPIO high (reset)
                set_gpio_value(gpio_fd, 1);

#ifdef DEBUG                
                printf("Set GPIO %d HIGH.\n", GPIO_PIN);
#endif
                write_bram(bram_vaddr, BRAM_FLAG_OFFSET, 0);


#ifdef DEBUG                
                printf("Set flag_bram = 0. Requesting reset/idle.\n");
#endif
                free_ddr_storage();
                next_state = PS_STATE_INIT;
                 // Wait before polling again
                usleep(POLL_INTERVAL_US);
                break;

            default:
                fprintf(stderr, "Error: Unknown state %d\n", current_state);
                next_state = PS_STATE_RESET;
                break;
        }

    }

    // --- Cleanup ---
    printf("Cleaning up...\n");
    unmap_bram(bram_vaddr, BRAM_MAP_SIZE, bram_fd);
    cleanup_gpio(GPIO_PIN, gpio_fd);
    printf("Cleanup complete. Exiting.\n");

    return 0;
}

// --- Helper Function Implementations ---

void print_state_change(PsState old_state, PsState new_state) {
     if (old_state == new_state) return;
     printf("State Transition: %s -> %s\n", state_names[old_state], state_names[new_state]);
}

int setup_gpio(int pin) {
    char buffer[GPIO_PATH_MAX];
    int fd;

    // Export GPIO pin
    fd = open("/sys/class/gpio/export", O_WRONLY);
    if (fd < 0) {
        // Check if already exported (ENOENT expected if sysfs path exists)
        snprintf(buffer, sizeof(buffer), "/sys/class/gpio/gpio%d/value", pin);
        if (access(buffer, F_OK) != 0) {
             perror("Failed to open /sys/class/gpio/export");
             return -1;
        } // else: Already exported, continue
    } else {
        snprintf(buffer, sizeof(buffer), "%d", pin);
        if (write(fd, buffer, strlen(buffer)) < 0) {
            // Check if error is because it's already exported
            if (errno != EBUSY) {
                perror("Failed to write to /sys/class/gpio/export");
                close(fd);
                return -1;
            } // else: EBUSY means already exported, ignore error
        }
        close(fd);
         // Small delay for sysfs to create files
         usleep(100000); // 100ms
    }


    // Set GPIO direction to output
    snprintf(buffer, sizeof(buffer), "/sys/class/gpio/gpio%d/direction", pin);
    fd = open(buffer, O_WRONLY);
    if (fd < 0) {
        perror("Failed to open GPIO direction file");
        return -1;
    }
    if (write(fd, "out", 3) < 0) {
        perror("Failed to set GPIO direction to out");
        close(fd);
        return -1;
    }
    close(fd);

    // Open GPIO value file for writing
    snprintf(buffer, sizeof(buffer), "/sys/class/gpio/gpio%d/value", pin);
    fd = open(buffer, O_WRONLY);
    if (fd < 0) {
        perror("Failed to open GPIO value file for writing");
        return -1;
    }

    return fd; // Return the file descriptor for the value node
}

int set_gpio_value(int fd, int value) {
    if (fd < 0) {
        fprintf(stderr, "Invalid GPIO file descriptor\n");
        return -1;
    }
    char val_str = (value == 1) ? '1' : '0';
    if (write(fd, &val_str, 1) < 0) {
        perror("Failed to write GPIO value");
        return -1;
    }
    return 0;
}

void cleanup_gpio(int pin, int fd) {
    if (fd >= 0) {
        close(fd); // Close the value file descriptor
    }
    //printf("GPIO %d resources released.\n", pin);
}


int map_bram(off_t phys_addr, size_t size, volatile uint32_t** vaddr_ptr, int* fd_ptr) {
    *fd_ptr = open("/dev/mem", O_RDWR | O_SYNC);
    if (*fd_ptr < 0) {
        perror("Failed to open /dev/mem");
        return -1;
    }

    void *mapped_addr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, *fd_ptr, phys_addr);
    if (mapped_addr == MAP_FAILED) {
        perror("Failed to mmap physical address");
        close(*fd_ptr);
        *fd_ptr = -1;
        return -1;
    }
    *vaddr_ptr = (volatile uint32_t *)mapped_addr;
    return 0;
}

void unmap_bram(volatile uint32_t* vaddr, size_t size, int fd) {
    if (vaddr != NULL && vaddr != MAP_FAILED) {
        if (munmap((void *)vaddr, size) == -1) {
            perror("Warning: Failed to unmap memory");
        }
         printf("BRAM unmapped.\n");
    }
     if (fd >= 0) {
        close(fd);
        printf("/dev/mem closed.\n");
    }
}

int map_ddr(off_t phys_addr, size_t size, volatile int** vaddr_ptr, int* fd_ptr) {
    *fd_ptr = open("/dev/mem", O_RDWR | O_SYNC);
    if (*fd_ptr < 0) {
        perror("Failed to open /dev/mem");
        return -1;
    }

    void *mapped_addr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, *fd_ptr, phys_addr);
    if (mapped_addr == MAP_FAILED) {
        perror("Failed to mmap physical address");
        close(*fd_ptr);
        *fd_ptr = -1;
        return -1;
    }
    *vaddr_ptr = (volatile int *)mapped_addr;
    return 0;
}

void unmap_ddr(volatile int* vaddr, size_t size, int fd) {
    if (vaddr != NULL && vaddr != MAP_FAILED) {
        if (munmap((void *)vaddr, size) == -1) {
            perror("Warning: Failed to unmap memory");
        }
        //printf("BRAM unmapped.\n");
    }
     if (fd >= 0) {
        close(fd);
        //printf("/dev/mem closed.\n");
    }
}

// Assumes BRAM is already mapped and vaddr is valid
void write_bram(volatile uint32_t* base, uint32_t offset, uint32_t value) {
    if (!base) return;
     base[offset] = value;
}

// Assumes BRAM is already mapped and vaddr is valid
uint32_t read_bram(volatile uint32_t* base, uint32_t offset) {
     if (!base) return 0xFFFFFFFF; // Return error indicator
    return base[offset];
}

// Signal handler for graceful shutdown
void signal_handler(int sig) {
    printf("\nCaught signal %d. Shutting down...\n", sig);
    keep_running = false;
}

void* flag_2_monitor_thread(void* arg) {
    int flag;
    while(1){
        flag = read_bram(bram_vaddr, BRAM_FLAG_OFFSET);
        if(flag == 2){
            pthread_mutex_lock(&flag_2_mutex);
            param_ack_interrupt_handler();
            pthread_mutex_unlock(&flag_2_mutex);
            break;
        }

        usleep(100000);
    }
    return NULL;
}

void* flag_5_monitor_thread(void* arg) {
    int flag;
    //printf("flag = %d___1\n",flag);
    while(1){
        flag = read_bram(bram_vaddr, BRAM_FLAG_OFFSET);
        if(flag == 5){
            pthread_mutex_lock(&flag_5_mutex); 
            fdma_interrupt_handler();
            pthread_mutex_unlock(&flag_5_mutex);
            break;
        }

        usleep(100000);
    }
    return NULL;
}

// 中断处理函数（由FPGA中断触发）
void param_ack_interrupt_handler() {
    pthread_mutex_lock(&event_mutex);
    param_ack_received = 1;
    pthread_cond_signal(&event_cond);  // 通知等待的线程
    pthread_mutex_unlock(&event_mutex);
}

void fdma_interrupt_handler() {
    pthread_mutex_lock(&fdma_event_mutex);
    fdma_end = 1;
    pthread_cond_signal(&fdma_event_cond);  // 通知等待的线程
    pthread_mutex_unlock(&fdma_event_mutex);
}

void handler(int sig, siginfo_t *info, void *ucontext) {
    if (sig == SIGRTMIN) {
        ipc_received = 1;
    }
}

int init_ddr_storage(int cycles, int size) {
    int max_cycles = cycles;
    int data_size = size;
    int i;
    
    // 分配一整块连续内存
    ddr_block = (int *)malloc(max_cycles * data_size * sizeof(int));
    if (!ddr_block) return -1;

    // 分配二维指针数组
    ddr_data = (int **)malloc(max_cycles * sizeof(int *));
    if (!ddr_data) {
        free(ddr_block);
        ddr_block = NULL;
        return -1;
    }

    // 设置每行的起始地址
    for (i = 0; i < max_cycles; ++i) {
        ddr_data[i] = ddr_block + i * data_size;
    }
    return 0;
}

void free_ddr_storage() {
    if (ddr_data) {
        free(ddr_data);
        ddr_data = NULL;
    }

    if (ddr_block) {
        free(ddr_block);
        ddr_block = NULL;
    }
}

//gcc -g system_test.c -o system_test -lrt -pthread -lm
