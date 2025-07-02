import os
import mmap
import ctypes
import signal
import threading
import time
import struct
import time
from multiprocessing import shared_memory

SHM_P1_TO_P2 = "/shm_p1_to_p2"  #后端发送的界面参数给C程序
SHM_PATH = f"/dev/shm/{SHM_P1_TO_P2[1:]}"

SHM_P2_TO_P1 = "/shm_p2_to_p1"  #后端接收的c程序计算结果

MAX_ARR1_LEN = 100
ROWS = 1000
COLS = 1000
SIG = signal.SIGRTMIN

raw_dataFromC = None
data_length = 0
dataFromC = None
receivedC = False #收到C程序数据，准备等前端来取

def handler(signum, frame):
    global received
    received = True

def write_pid(path):
    with open(path, 'w') as f:
        f.write(str(os.getpid()))

def wait_for_pid(path):
    while not os.path.exists(path):
        time.sleep(0.01)
    with open(path, 'r') as f:
        return int(f.read().strip())

# def noticeToC(params,delta_f):
#     global received
#     write_pid("/tmp/process_py.pid")

        
#     # 计算共享内存大小 (8字节length(data) + 4字节delta_f + N*4字节data)
#     shm_size = 8 + 4 + len(params) * 4

#     # 创建共享内存
#     try:
#         fd = os.open(SHM_PATH, os.O_CREAT | os.O_RDWR)
#         os.ftruncate(fd, shm_size)
        
#         with mmap.mmap(fd, shm_size, mmap.MAP_SHARED, mmap.PROT_WRITE) as mm:
#             # 写入length (int64_t)
#             mm[0:8] = struct.pack('q', len(params))
            
#             # 写入delta_f (float32)
#             mm[8:12] = struct.pack('f', delta_f)
            
#             # 写入参数数据 (int32[])
#             params_data = struct.pack(f'{len(params)}i', *params)
#             mm[12:12+len(params)*4] = params_data

#             print(f"Python: 已写入共享内存 (size={shm_size})")
#             print(f"参数个数: {len(params)}, delta_f: {delta_f}")
#             print("数据头部:", params)

#         # 写入PID文件
#         with open("/tmp/process1.pid", "w") as f:
#             f.write(str(os.getpid()))

#         # 等待C程序准备
#         while not os.path.exists("/tmp/process2.pid"):
#             time.sleep(0.01)

#         # 发送SIGRTMIN信号（Linux实时信号）
#         with open("/tmp/process2.pid", "r") as f:
#             pid = int(f.read())
#         os.kill(pid, signal.SIGRTMIN)  # 修改为发送SIGRTMIN
#         print("Python: 已发送SIGRTMIN信号给C程序")

#         # input("按Enter键退出...")
#         time.sleep(1)

#     finally:
#         # 清理资源
#         if os.path.exists(SHM_PATH):
#             os.unlink(SHM_PATH)
#         if os.path.exists("/tmp/process1.pid"):
#             os.unlink("/tmp/process1.pid")

def noticeToC(params):
    write_pid("/tmp/process_py.pid")

        
    # 计算共享内存大小 (8字节length(data) + N*4字节data)
    shm_size = 8 + 4 + len(params) * 4

    # 创建共享内存
    try:
        fd = os.open(SHM_PATH, os.O_CREAT | os.O_RDWR)
        os.ftruncate(fd, shm_size)
        
        with mmap.mmap(fd, shm_size, mmap.MAP_SHARED, mmap.PROT_WRITE) as mm:
            # 写入length (int64_t)
            mm[0:4] = struct.pack('q', len(params))
            
            # 写入参数数据 (int32[])
            params_data = struct.pack(f'{len(params)}i', *params)
            mm[4:4+len(params)*4] = params_data

            print(f"Python: 已写入共享内存 (size={shm_size})")
            print(f"参数个数: {len(params)}")
            print("数据头部:", params)

        # 写入PID文件
        with open("/tmp/process1.pid", "w") as f:
            f.write(str(os.getpid()))

        # 等待C程序准备
        while not os.path.exists("/tmp/process2.pid"):
            time.sleep(0.01)

        # 发送SIGRTMIN信号（Linux实时信号）
        with open("/tmp/process2.pid", "r") as f:
            pid = int(f.read())
        os.kill(pid, signal.SIGRTMIN)  # 修改为发送SIGRTMIN
        print("Python: 已发送SIGRTMIN信号给C程序")

        # input("按Enter键退出...")
        time.sleep(1)

    finally:
        # 清理资源
        if os.path.exists(SHM_PATH):
            os.unlink(SHM_PATH)
        if os.path.exists("/tmp/process1.pid"):
            os.unlink("/tmp/process1.pid")





class SignalListener:
    def __init__(self, sig=signal.SIGRTMIN):  # 修改为监听SIGRTMIN
        """
        初始化信号监听
        :param sig: 要监听的信号（默认SIGRTMIN）
        """
        self.sig = sig
        self.received = False
        self.thread = threading.Thread(target=self._listen, daemon=True)
        
        # 必须在主线程设置信号处理
        signal.signal(self.sig, self._handler)
        print(f"已注册信号处理器: {self.sig} (value={signal.Signals(self.sig).value})")

    def _handler(self, signum, frame):
        """信号处理函数（由操作系统调用）"""
        print(f"捕获到信号 {signum}")
        self.received = True        
        print("信号处理中...")
        self._read_shared_memory()
        self.received = False  # 重置状态以便重复使用

    def _read_shared_memory(self):
        """直接读取共享内存中的所有数据（不关心头部结构）"""
        shm_path = f"/dev/shm{SHM_P2_TO_P1}"
        global raw_dataFromC, data_length,dataFromC,receivedC
        try:
            # 获取共享内存文件大小
            file_size = os.path.getsize(shm_path)
            if file_size == 0:
                raise ValueError("共享内存文件为空")

            # 映射整个共享内存
            with open(shm_path, 'rb') as fd:
                with mmap.mmap(fd.fileno(), file_size, mmap.MAP_SHARED, mmap.PROT_READ) as mm:
                    # 读取所有数据（字节形式）
                    raw_dataFromC = mm[:]
                    
                    length_bytes = mm[:4]  # 前4个字节

                    # 使用 struct.unpack 解析为 int32
                    # '<i' 表示小端字节序的 int32
                    data_length = struct.unpack('<i', length_bytes)[0]
                    
                    # 尝试解析为整数数组（假设数据是int32类型）
                    # 注意：如果数据不是int32，需要调整struct.unpack的格式
                    # 计算可以解析多少个int32（每个int32占4字节）
                    num_ints = file_size // 4
                    if num_ints == 0:
                        raise ValueError("共享内存数据不足以解析为一个int32")

                    # 解析为int32数组
                    dataFromC = struct.unpack(f"{num_ints}i", raw_dataFromC)

                    receivedC = True

                    # 打印部分数据（避免打印过多）
                    print("\n从共享内存读取的原始数据（int32格式）:")
                    print(f"  - 总数据量: ({num_ints - 1} 个int32 数据)")
                    print(f"  - 前30个元素: {dataFromC[:30]}")
                    if num_ints > 30:
                        print(f"  - 后10个元素: {dataFromC[-10:]}")
                    

        except Exception as e:
            print(f"共享内存读取错误: {e}")
        finally:
            # 不自动删除共享内存文件
            pass

    def _listen(self):
        """监听线程循环"""
        print(f"[PID:{os.getpid()}] 正在监听 {signal.Signals(self.sig).name}...")
        while not self.receivedC:
            time.sleep(0.1)  # 避免CPU忙等待
        
        # print("信号处理中...")
        # self._read_shared_memory()
        # self.received = False  # 重置状态以便重复使用

    def start(self):
        """启动监听线程"""
        self.thread.start()

