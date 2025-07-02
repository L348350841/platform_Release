import sqlite3
import pickle

# 连接到SQLite数据库
conn = sqlite3.connect(r'c:\Users\16868\Desktop\N_flask_mysite\backend\instance\test.db')
cursor = conn.cursor()

# 创建表（如果不存在）
cursor.execute('''
CREATE TABLE IF NOT EXISTS temps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    temp_time TEXT,
    value_b BLOB
)
''')

# 插入数据
temp_time = '2022-05-15 07:22:34'
value_array = [17.556400, 18.202999, 19.133499, 18.271299, 24.549491]
binary_data = pickle.dumps(value_array)

insert_query = "INSERT INTO temps (temp_time, value_b) VALUES (?,?)"
cursor.execute(insert_query, (temp_time, binary_data))
conn.commit()

# 读取数据
select_query = "SELECT temp_time, value_b FROM temps WHERE temp_time =?"
cursor.execute(select_query, (temp_time,))
result = cursor.fetchone()

if result:
    retrieved_time, retrieved_binary_data = result
    try:
        retrieved_array = pickle.loads(retrieved_binary_data)
        print(f"查询到的数据: 时间: {retrieved_time}, 数组: {retrieved_array}")
    except TypeError as e:
        print(f"反序列化数据时发生错误: {e}。请检查数据类型是否正确。")
else:
    print("未找到匹配的数据")

conn.close()