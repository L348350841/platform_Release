from app import app
from app.models import db
from flask import send_from_directory
import os

# from app.POSIXC import SignalListener



# 获取自定义环境变量
BACKEND_ENV = os.getenv('BACKEND_ENV', 'production')  # 默认为 development   production

# IIC 与子板通信

#from IIC import I2CFileDescriptor
# # I2C 设备全局变量
# i2c = None

# # 服务器启动时执行的初始化函数
# def initialize_i2c_communication():
#     global i2c
#     try:
#         # 初始化 I2C 设备（总线号、从设备地址需根据实际硬件修改）
#         i2c = I2CFileDescriptor(bus_number=1)
#         i2c.set_slave(0x50)  # 设置从设备地址（例如 EEPROM 地址 0x50）
#         print("I2C 设备初始化成功")

#         # 立即发送指令并接收数据（示例：写入寄存器 0x01 并读取结果）
#         print("开始发送初始 I2C 指令")
    
#         # 示例 1：向寄存器 0x01 写入数据 0xAA
#         write_success = i2c.write_register(0x01, 0xAA)
#         if write_success:
#             print("指令发送成功：写入寄存器 0x01 = 0xAA")
#             time.sleep(0.1)  # 等待设备响应（根据设备特性调整延时）

#             # 示例 2：读取寄存器 0x01 的数据
#             data = i2c.read_register(0x01, length=1)
#             if data is not None:
#                 value = int.from_bytes(data, byteorder='big')
#                 print(f"接收数据成功：寄存器 0x01 的值为 0x{value:02X} ({value})")
#                 i2c.close() #关闭IIC
#             else:
#                 print("接收数据失败")
#         else:
#             print("指令发送失败")


#     except Exception as e:
#         print(f"I2C 初始化失败: {e}")
#         if i2c:
#             i2c.close()
#         raise

# # 应用启动前执行初始化
# @app.before_first_request
# def before_first_request():
#     initialize_i2c_communication()






if BACKEND_ENV == 'production':
    # 获取项目根目录
    base_dir = os.path.abspath(os.path.dirname(__file__))
    # 假设前端打包文件在项目根目录的上一级目录的dist文件夹中
    dist_dir = os.path.join(base_dir, '..', 'dist')

    @app.route('/')
    def index():
        try:
            return send_from_directory(dist_dir, 'index.html')
        except FileNotFoundError:
            return "文件未找到", 404

    @app.route('/css/<path:filename>')
    def serve_css(filename):
        css_dir = os.path.join(dist_dir, 'css')
        try:
            return send_from_directory(css_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404

    @app.route('/fonts/<path:filename>')
    def serve_fonts(filename):
        fonts_dir = os.path.join(dist_dir, 'fonts')
        try:
            return send_from_directory(fonts_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404


    @app.route('/img/<path:filename>')
    def serve_img(filename):
        img_dir = os.path.join(dist_dir, 'img')
        try:
            return send_from_directory(img_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404


    @app.route('/js/<path:filename>')
    def serve_js(filename):
        js_dir = os.path.join(dist_dir, 'js')
        print('okkkk')
        try:
            return send_from_directory(js_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404

    @app.route('/static/map_load.js')
    def serve_static():
        try:
            return send_from_directory(dist_dir, 'static/map_load.js')
        except FileNotFoundError:
            return "文件未找到", 404
    @app.route('/static/baidu-api.js')
    def serve_static2():
        try:
            return send_from_directory(dist_dir, 'static/baidu-api.js')
        except FileNotFoundError:
            return "文件未找到", 404

    @app.route('/static/modules/<path:filename>')
    def modules_js(filename):
        modules_dir = os.path.join(dist_dir, 'static/modules')
        try:
            return send_from_directory(modules_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404

    @app.route('/static/tiles/<path:filename>')
    def tiles_js(filename):
        tiles_dir = os.path.join(dist_dir, 'static/tiles')
        try:
            return send_from_directory(tiles_dir, filename)
        except FileNotFoundError:
            return "文件未找到", 404











if __name__ == '__main__':
    # 希望在每次启动应用时，自动根据模型定义来创建数据库表
    # with app.app_context():
    #     db.create_all() #只会创建那些在当前代码中定义但在数据库中尚未存在的表，不会影响已有的表
    
    # 检查是否应该开始采集程序
    # if check_start_file():
    #     start_collection_program()
    
    # 启动信号监听线程
    # listener = SignalListener()  # 默认监听SIGUSR1
    # listener.start()  # 启动监听线程

    # 启动服务器
    if BACKEND_ENV == 'development':
        app.run(port=8080,debug=True)
    elif BACKEND_ENV == 'production':
        app.run(host='192.168.137.2', port=8080,debug=True)
    