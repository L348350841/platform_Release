// shared.h
#ifndef SHARED_H
#define SHARED_H

#include <stddef.h>

#define SHM_P1_TO_P2 "/shm_p1_to_p2"
#define SHM_P2_TO_P1 "/shm_p2_to_p1"

#define MAX_ARR1_LEN
#define ROWS
#define COLS

struct Channel1 {
    size_t length;
    int data[];
};

struct Channel2 {
    size_t arr1_len;
    int data[];
};

#endif
