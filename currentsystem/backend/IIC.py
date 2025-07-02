import struct
import fcntl
import os
import logging


# 初始化 I2C 设备（打开文件描述符）
def open_i2c_device(bus_number=1):
    """打开 I2C 总线设备文件，返回文件描述符"""
    device_path = f"/dev/i2c-{bus_number}"
    try:
        fd = os.open(device_path, os.O_RDWR)
        print(f"成功打开 I2C 总线 {bus_number}（设备文件：{device_path}）")
        return fd
    except OSError as e:
        print(f"打开 I2C 设备失败: {e}")
        raise



# 设置从设备地址
I2C_SLAVE = 0x0703  # Linux I2C 内核定义的宏

def set_slave_address(fd, slave_address):
    """设置从设备地址"""
    if fcntl.ioctl(fd, I2C_SLAVE, slave_address) < 0:
        print(f"设置从设备地址 0x{slave_address:02X} 失败")
        raise OSError("从设备地址设置失败")
    print(f"从设备地址设置为 0x{slave_address:02X}")


# 发送数据（单字节 / 多字节）

def write_i2c_data(fd, data, is_register=False, register=0x00):
    """
    发送数据到从设备
    
    参数:
        fd: 文件描述符
        data: 要发送的数据（字节或字节列表）
        is_register: 是否写入寄存器（True 时需指定 register）
        register: 寄存器地址（仅在 is_register=True 时有效）
    """
    if is_register:
        # 先发送寄存器地址，再发送数据（适用于带寄存器的设备）
        msg = bytes([register]) + bytes([data]) if isinstance(data, int) else bytes([register]) + data
    else:
        msg = data if isinstance(data, bytes) else bytes([data])
    
    try:
        os.write(fd, msg)
        print(f"发送数据: {[hex(b) for b in msg]}")
        return True
    except OSError as e:
        print(f"数据发送失败: {e}")
        return False

# 简单接收（直接读取）
def read_i2c_data(fd, length=1, is_register=False, register=0x00):
    """
    从从设备接收数据
    
    参数:
        fd: 文件描述符
        length: 读取字节数
        is_register: 是否从寄存器读取（True 时需指定 register）
        register: 寄存器地址（仅在 is_register=True 时有效）
    
    返回:
        字节数据（bytes 类型）
    """
    if is_register:
        # 先发送寄存器地址，再读取数据（需用 i2c_rdwr 实现）
        write_msg = (True, bytes([register]))  # 写寄存器地址
        read_msg = (False, bytes(length))       # 读数据
        if not i2c_transfer(fd, [write_msg, read_msg]):
            return None
    else:
        # 直接读取（无需寄存器，如 EEPROM 直接寻址）
        try:
            data = os.read(fd, length)
            print(f"读取数据: {[hex(b) for b in data]}")
            return data
        except OSError as e:
            print(f"数据读取失败: {e}")
            return None

class I2CFileDescriptor:
    def __init__(self, bus_number=1):
        self.fd = open_i2c_device(bus_number)
    
    def set_slave(self, addr):
        set_slave_address(self.fd, addr)
    
    def write_register(self, reg, data):
        return write_i2c_data(self.fd, data, is_register=True, register=reg)
    
    def read_register(self, reg, length=1):
        return read_i2c_data(self.fd, length, is_register=True, register=reg)
    
    def close(self):
        os.close(self.fd)
        print("I2C 设备文件已关闭")

# 示例用法
if __name__ == "__main__":
    i2c = I2CFileDescriptor(bus_number=1)
    i2c.set_slave(0x50)  # 设置从设备地址
    i2c.write_register(0x01, 0xAA)  # 写入寄存器 0x01
    data = i2c.read_register(0x01, length=1)  # 读取寄存器数据
    i2c.close()