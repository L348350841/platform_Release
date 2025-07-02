from flask import jsonify,request
from app import app, db
from app.models import User, Role ,Temp, Center, Path, Submenu, Para ,Menu,Freshift
import mmap
import os
from datetime import datetime
import random

# from app.POSIXC import noticeToC,received,dataFromC

# import numpy as np

#打开 /dev/mem 文件进行内存映射和数据读取，将读取的数据转换为十六进制字符串
#mmap 是一种内存映射文件的机制,它将一个文件或设备的内容映射到进程的地址空间中
def read_memory_data(start_address=0x3f600000, byte_count=20):
    try:
        fd = os.open('/dev/mem', os.O_RDONLY | os.O_SYNC)
        #映射区域是共享的，多个进程可以同时访问这个映射区域;
        #映射区域的访问权限为只读，即进程只能从这个映射区域中读取数据，不能修改数据;
        mem = mmap.mmap(fd, byte_count, mmap.MAP_SHARED, mmap.PROT_READ, offset=start_address)
        #从映射的内存区域中读取 byte_count 个字节的数据，并将其存储在变量 data 中
        data = mem.read(byte_count)
        mem.close()
        os.close(fd)
        hex_data = ' '.join(f'{byte:02x}' for byte in data)
        return hex_data
    except PermissionError:
        return "没有足够的权限访问 /dev/mem,请使用 sudo 运行此脚本。"
    except OSError as e:
        return f"发生 OS 错误: {e}"

@app.route('/api/login', methods=['POST'])
def login():
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        username = json_req.get('name')
        password = json_req.get('password')

        # all_user = User.query.all()
        target_item = User.query.filter(User.user_name == username)

        if not target_item.count():
            code = 0
            message = '用户名不存在'
        else:
            user = target_item.first()
            target_key = user.user_password
            if password != target_key:
                code = 0
                message = '密码错误'
            else:
                role = user.user_role
                data = {'role': role}
    except Exception as e:
        code = 0
        message = f'发生错误: {str(e)}'

    return jsonify({'code': code,'message': message, 'data': data})



@app.route('/api/getParaMenu', methods=['POST'])
def getParaMenu():
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        role = json_req.get('role')

        targetRole = Role.query.filter_by(rid=role).first()
        if not targetRole:
            raise ValueError('Role not found')

        menuList = targetRole.menus
        menuData = []
        for i in menuList:
            item = {"mid": i.mid, "mcode": i.menu_code, "name": i.menu_name}
            print(item)
            menuData.append(item)

        data = {'menu': menuData}
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/getSubMenu', methods=['POST'])
def getSubMenu():
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        mid = json_req.get('mid')
        # print(00)
        # print(mid)
        subList = Submenu.query.filter_by(father_menu_id=mid).all()
        subData = []
        for i in subList:
            item = {"sid": i.sid, "sname": i.sub_name}
            subData.append(item)

        data = {'subMenu': subData}
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/getParaList', methods=['POST'])
def getParaList():
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        sid = json_req.get('sid')
        print(sid)

        paraList = Para.query.filter_by(farther_submenu_id=sid).all()
        paraData = []
        for i in paraList:
            item = {
                "pid": i.pid,
                "pname": i.para_name,
                "pcode": i.para_code,
                "writable": i.writable,
                "type": i.type_name,
                "unit": i.unit,
                "longth": i.longth,
                "readValue": i.read_value,
                "setValue": i.write_value,
                "time": i.time.strftime("%Y-%m-%d, %H:%M:%S")
            }
            paraData.append(item)

        data = {'paraList': paraData}
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})



@app.route('/api/getFreshiftData', methods=['POST'])
def getFreshiftData():
    # print(' success0')
    code = 1
    message ='success'
    data = {}

    try:
        json_result = request.get_json()
        time = json_result.get('time')
        # print(time)

        if time in [0, None]:
            max_time = db.session.query(db.func.max(Freshift.freshift_time)).scalar()
            print(max_time)
            max_time_str = max_time.strftime('%Y-%m-%d %H:%M:%S')
            target = Freshift.query.filter(Freshift.freshift_time == max_time_str).first()
            if target:
                str_numbers = target.value_b
                # cleaned_str = str_numbers.strip('[]')
                # print(str_numbers)
                str_numbers_list = str_numbers.split(',')
                # out1 = np.array([float(num.strip()) for num in str_numbers_list])
                out1 = [float(num.strip()) for num in str_numbers_list]
                data = {'freshift': out1}
        else:
            gettime = datetime.fromtimestamp(time)
            gettime_str = gettime.strftime('%Y-%m-%d %H:%M:%S')
            print(gettime_str)
            print('gettime_str')
            target = Freshift.query.filter(Freshift.freshift_time == gettime_str).first()
            if target:
                str_numbers = target.value_b
                str_numbers_list = str_numbers.split(',')
                # out1 = np.array([float(num.strip()) for num in str_numbers_list])
                out1 = [float(num.strip()) for num in str_numbers_list]
                data = {'freshift': out1}
        # 读取内存数据   需要的时候再打开
        # memory_data = read_memory_data()
        # data['memory_data'] = memory_data
        # # 打印从内存读取的数据
        # print(f"从内存读取的数据: {memory_data}")
    except Exception as e:
        code = 0
        message = str(e)
        import traceback
        print(traceback.format_exc())

    return jsonify({'code': code,'message': message, 'data': data})







@app.route('/api/getTempData', methods=['POST'])
def getTempData():
    # print(' success0')
    code = 1
    message ='success'
    data = {}

    try:
        json_result = request.get_json()
        time = json_result.get('time')
        # print(time)

        if time in [0, None]:
            max_time = db.session.query(db.func.max(Freshift.freshift_time)).scalar()
            print(max_time)
            max_time_str = max_time.strftime('%Y-%m-%d %H:%M:%S')
            target = Freshift.query.filter(Freshift.freshift_time == max_time_str).first()
            if target:
                str_numbers = target.value_b
                # cleaned_str = str_numbers.strip('[]')
                print(str_numbers)
                str_numbers_list = str_numbers.split(',')
                # out1 = np.array([float(num.strip()) for num in str_numbers_list])
                out1 = [float(num.strip()) + 10 for num in str_numbers_list]     #！！！！从频移到温度转换公式
                data = {'temp': out1}
        else:
            gettime = datetime.fromtimestamp(time)
            gettime_str = gettime.strftime('%Y-%m-%d %H:%M:%S')
            print(gettime_str)
            print('gettime_str')
            target = Freshift.query.filter(Freshift.freshift_time == gettime_str).first()
            if target:
                str_numbers = target.value_b
                str_numbers_list = str_numbers.split(',')
                # out1 = np.array([float(num.strip()) for num in str_numbers_list])
                out1 = [float(num.strip()) + 10 for num in str_numbers_list]
                data = {'temp': out1}
        # 读取内存数据   需要的时候再打开
        # memory_data = read_memory_data()
        # data['memory_data'] = memory_data
        # # 打印从内存读取的数据
        # print(f"从内存读取的数据: {memory_data}")
    except Exception as e:
        code = 0
        message = str(e)
        import traceback
        print(traceback.format_exc())

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/getOneData', methods=['POST'])
def getOneData():
    code = 1
    message ='success'
    data = {
        "time": [],
        "value": [] 
    }

    try:
        json_result = request.get_json()
        onedata = json_result.get('onedata')
        # print(onedata) #可以获取前端用户输入
        if onedata is None:
            raise ValueError('未提供 onedata 参数')
        try:
            onedata = int(onedata)
        except ValueError:
            raise ValueError('onedata 参数必须是有效的整数')
        # 获取所有不同的 freshift_time
        distinct_times = db.session.query(Freshift.freshift_time).distinct().all()
        # print(distinct_times)
        for time in distinct_times:
            time_str = time[0]#取出对应时间点
            # print(f"正在查询时间: {time_str}")
            # 获取该时间对应的第 onedata 个数据
            # 使用模糊查询
            records = Freshift.query.filter(Freshift.freshift_time.like(f'%{time_str}%')).all()
            query_result_str = ''.join(map(str, records))
            # 去除首尾方括号
            query_result = query_result_str.strip('[]')
            # 以冒号分割，获取冒号后面的数值数据部分
            numeric_part = query_result.split(':', 1)[1]
            # 以逗号分割数值数据，过滤掉空字符串并转换为列表
            numeric_values = [val for val in numeric_part.split(',') if val.strip()]
            if len(numeric_values) >= onedata:
                value = numeric_values[onedata - 1]
                data["time"].append(time_str)
                data["value"].append(value)
                # print(f"查询到第 {time_str} 数据: {value}")
            else:
                data["time"].append(time_str)
                data["value"].append(None)
        print(f"最终结果: {data}")
    except Exception as e:
        code = 0
        message = str(e)
        import traceback
        print(traceback.format_exc())

    return jsonify({'code': code,'message': message, 'data': data})

@app.route('/api/getFreshiftTime', methods=['GET'])
def getTempTime():
    code = 1
    message ='success'
    data = {}
    
    try:
        target = Freshift.query.all()
        # print('11success0')
        targetStr = [item.freshift_time for item in target]
        data = {'timeList': targetStr}
        # print(data)
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/getCenterPoint', methods=['GET'])
def getCenterPoint():
    code = 1
    message ='success'
    data = {}

    try:
        center = Center.query.first()
        print(center)
        if center:
            data = {'zoom': center.zoom, 'lng': center.lng, 'lat': center.lat}
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/getPathPoint', methods=['GET'])
def getPathPoint():
    code = 1
    message ='success'
    data = {}

    try:
        path_list = Path.query.all()
        path_data = [{"lng": item.lng, "lat": item.lat} for item in path_list]
        data = {'pathData': path_data}
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message, 'data': data})


@app.route('/api/setPoint', methods=['POST'])
def setPoint():
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        clng = json_req.get('Clng')
        clat = json_req.get('Clat')
        czoom = json_req.get('zoom')
        pathdata = json_req.get('pathdata')

        Center.query.update({'lng': clng, 'lat': clat, 'zoom': czoom})
        Path.query.delete()

        path_list = [Path(lng=item['lng'], lat=item['lat']) for item in pathdata]
        db.session.add_all(path_list)
        db.session.commit()
    except Exception as e:
        code = 0
        message = str(e)
        db.session.rollback()

    return jsonify({'code': code,'message': message, 'data': data})


# ----------------------------------------------------# getParaValue
@app.route('/api/addParaValue', methods=['POST'])
def addParaValue():
    # 直接获取请求中的JSON数据
    data = request.get_json()
    
    if not data:
        return jsonify({"code": 0, "message": "无数据"}), 400
    
    # 打印接收到的数据
    print("接收到的数据：", data)
    
    type_name = data.get('type_name')
    if type_name == "无":
        type_name = ""
    try:
        # 数据转换和验证
        processed_data = {
            'para_name': data.get('para_name', 'new para'),
            'para_code': data.get('para_code'),
            'type_name': type_name,
            'longth': int(data.get('longth', 16)),  # 注意前端可能拼写为longth
            'writable': bool(data.get('writable', False)),
            'unit': data.get('unit'),
            'write_value': float(data.get('write_value')) if 'write_value' in data else None,
            'farther_submenu_id': int(data.get('farther_submenu', 1))  # 注意前端可能拼写为farther_submenu
        }
        
        
        # 检查参数代码是否已存在
        existing_para = Para.query.filter_by(para_code=processed_data['para_code']).first()
        
        if existing_para:
            # 如果参数已存在，返回错误
            print("参数代码已存在",processed_data['para_code'])
            return jsonify({"code": 0, "message": f"参数代码 {processed_data['para_code']} 已存在"})
        
        # 创建新参数
        new_para = Para(**processed_data)
        db.session.add(new_para)
        db.session.commit()
        
        return jsonify({"code": 1, "message": "参数创建成功"})
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"code": 0, "message": f"数据库操作失败: {str(e)}"})
@app.route('/api/delParaValue', methods=['POST'])
def delParaValue():
    # 直接获取请求中的JSON数据
    data = request.get_json()
    # 打印接收到的数据
    print("接收到的pcode：", data['pcode'])
    db.session.delete(Para.query.filter_by(para_code=data['pcode']).first())
    db.session.commit()
    

    
    return jsonify({"code": 1, "message": "参数创建成功"})
    

@app.route('/api/setParaValue', methods=['POST'])
def setParaValue(): 
    code = 1
    message ='success'
    data = {}

    try:
        json_req = request.get_json()
        # print(json_req)
        para_list = json_req.get('paraList', [])
        print(para_list)

    # 遍历 paraList 并更新数据库
        for item in para_list:
            pcode = item.get('pcode')
            set_value = item.get('setValue')
            if pcode and set_value:
                 Para.query.filter_by(para_code=pcode).update({
                    'read_value': set_value,
                    'write_value': set_value,
                    'time': datetime.now()
                })
        db.session.commit()
    
    # 存入数据库
    except Exception as e:
        code = 0
        message = str(e)

    return jsonify({'code': code,'message': message})


@app.route('/api/startCollect', methods=['POST'])
def startCollect(): 
    # 从 JSON 请求体中获取参数
    # data = request.json
    # arg = data.get('arg')  # 获取名为 'arg' 的参数
    # print(f"接收到参数: arg = {arg}")  # 打印参数，用于调试


    # params = Para.query.filter_by(farther_submenu_id=arg).all()

    # result = [
    #     {
    #         'para_code': param.para_code,
    #         'read_value': param.read_value
    #     }
    #     for param in params
    # ]
    # print(result)

        # 构造参数
    params = [
        64, 100, 41, 100, 70, 2, 1, 0,
        0, 179, 143, 12, 227, 195, 0, 10, 6
    ]
    delta_f = 0.01
    # noticeToC(params,delta_f)

    code = 1
    message ='success'
    return jsonify({'code': code,'message': message})



@app.route('/api/checkCollection', methods=['get'])
def checkCollection(): 
    completed = 1
    # windows下模拟二维数据10*10
    rows, cols = 10, 10
    dataFromC = [[random.randint(-100, 100) for _ in range(cols)] for _ in range(rows)]

    # if received == True:
    #     completed = 1
    
    return jsonify({'completed': completed, "data": dataFromC})


UPLOAD_BIT = '/home/platform/bit'
UPLOAD_FOLDER = '/home/platform/updatesystem'
@app.route('/api/uploadSystem', methods=['POST'])
def upload_folder():
    code = 1
    if 'files[]' not in request.files:  # 注意：多文件上传的字段名通常是 files[]
        return jsonify({"status": "error", "message": "No files"}), 400
    
    files = request.files.getlist('files[]')
    for file in files:
        # 保存文件（保留相对路径）
        save_path = os.path.join(UPLOAD_FOLDER, file.filename)
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        file.save(save_path)
    
    return jsonify({'code': code, "count": len(files)})




@app.route('/api/uploadBit', methods=['POST'])
def upload_bit():
    code = 1
    if 'file' not in request.files:
        return {'status': 'error', 'message': 'No file'}, 400
    
    file = request.files['file']
    if file:
        # 确保上传目录存在
        if not os.path.exists(UPLOAD_BIT):
            os.makedirs(UPLOAD_BIT)
        
        # 保存文件到指定目录
        file_path = os.path.join(UPLOAD_BIT, file.filename)
        file.save(file_path)
    # 处理文件...
    return {'code': code}


"""
恢复出厂设置：
    bin文件:挂载SD卡,用出厂bin文件替换
    系统文件夹:直接替换currentsystem文件夹
"""
@app.route('/api/resetBinFactory', methods=['POST'])
def resetBinFactory():
    code = 1
    return {'code': code}

@app.route('/api/resetSysFactory', methods=['POST'])
def resetSysFactory():
    code = 1
    return {'code': code}