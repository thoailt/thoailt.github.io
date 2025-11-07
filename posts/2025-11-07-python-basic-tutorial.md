---
title: "Python Cơ Bản: Hướng Dẫn Từ Đầu Cho Người Mới Bắt Đầu"
date: "2025-11-07"
author: "thoailt"
tags: ["Python", "Programming", "Tutorial", "Beginner"]
excerpt: "Học Python từ con số 0 với hướng dẫn chi tiết, ví dụ thực tế và code mẫu bạn có thể chạy ngay lập tức."
---

# Python Cơ Bản: Hướng Dẫn Từ Đầu Cho Người Mới Bắt Đầu

Python là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay, được sử dụng rộng rãi trong phát triển web, data science, machine learning, automation và nhiều lĩnh vực khác. Trong bài viết này, chúng ta sẽ cùng khám phá những kiến thức cơ bản về Python.

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python Logo" width="200" />
</div>

## Tại Sao Nên Học Python?

Python có nhiều ưu điểm khiến nó trở thành ngôn ngữ lý tưởng cho người mới bắt đầu:

- **Cú pháp đơn giản, dễ đọc**: Python được thiết kế để dễ hiểu, gần với ngôn ngữ tự nhiên
- **Cộng đồng lớn**: Hàng triệu lập trình viên sử dụng Python trên toàn thế giới
- **Thư viện phong phú**: Hàng nghìn thư viện miễn phí cho mọi mục đích
- **Đa năng**: Có thể làm được nhiều việc từ web, AI, data analysis đến automation
- **Nhu cầu công việc cao**: Rất nhiều công ty tuyển dụng Python developer

## 1. Cài Đặt Python

### Bước 1: Download Python

Truy cập [python.org](https://www.python.org/downloads/) và tải phiên bản mới nhất (Python 3.11 hoặc cao hơn).

### Bước 2: Cài đặt

**Windows:**

```bash
# Chạy file installer vừa tải
# Nhớ tick "Add Python to PATH"
```

**Mac/Linux:**

```bash
# Mac (dùng Homebrew)
brew install python3

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install python3 python3-pip
```

### Bước 3: Kiểm tra cài đặt

```bash
python --version
# Hoặc
python3 --version
```

Bạn sẽ thấy output kiểu: `Python 3.11.5`

## 2. Hello World - Chương Trình Đầu Tiên

Mở terminal hoặc command prompt, gõ `python` để vào interactive mode:

```python
# Chương trình đầu tiên
print("Hello, World!")
print("Chào mừng đến với Python!")
```

**Output:**

```
Hello, World!
Chào mừng đến với Python!
```

Đơn giản phải không? Không cần khai báo biến, không cần dấu chấm phẩy!

## 3. Biến và Kiểu Dữ Liệu

### Khai Báo Biến

Trong Python, bạn không cần khai báo kiểu dữ liệu:

```python
# Số nguyên (Integer)
age = 25
year = 2024

# Số thực (Float)
height = 1.75
pi = 3.14159

# Chuỗi (String)
name = "Thoai Le"
university = 'HCMUE'

# Boolean
is_student = True
is_graduated = False

# In ra kiểm tra
print(f"Tên: {name}")
print(f"Tuổi: {age}")
print(f"Chiều cao: {height}m")
print(f"Là sinh viên: {is_student}")
```

**Output:**

```
Tên: Thoai Le
Tuổi: 25
Chiều cao: 1.75m
Là sinh viên: True
```

### Kiểm Tra Kiểu Dữ Liệu

```python
name = "Python"
age = 30

print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(3.14))    # <class 'float'>
print(type(True))    # <class 'bool'>
```

## 4. Cấu Trúc Dữ Liệu Cơ Bản

### List (Danh Sách)

List là cấu trúc dữ liệu có thể thay đổi, chứa nhiều phần tử:

```python
# Tạo list
fruits = ["apple", "banana", "orange", "mango"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Truy cập phần tử (index bắt đầu từ 0)
print(fruits[0])      # apple
print(fruits[-1])     # mango (phần tử cuối)

# Thêm phần tử
fruits.append("grape")
print(fruits)         # ['apple', 'banana', 'orange', 'mango', 'grape']

# Xóa phần tử
fruits.remove("banana")
print(fruits)         # ['apple', 'orange', 'mango', 'grape']

# Độ dài của list
print(len(fruits))    # 4

# Lặp qua list
for fruit in fruits:
    print(f"Tôi thích {fruit}")
```

### Dictionary (Từ Điển)

Dictionary lưu trữ dữ liệu dạng key-value:

```python
# Tạo dictionary
student = {
    "name": "Thoai Le",
    "age": 25,
    "major": "Computer Science",
    "gpa": 3.67
}

# Truy cập giá trị
print(student["name"])        # Thoai Le
print(student.get("age"))     # 25

# Thêm/sửa giá trị
student["university"] = "HCMUE"
student["age"] = 26

# Lặp qua dictionary
for key, value in student.items():
    print(f"{key}: {value}")
```

### Tuple và Set

```python
# Tuple (không thể thay đổi)
coordinates = (10.8231, 106.6297)  # Tọa độ TP.HCM
print(coordinates[0])   # 10.8231

# Set (không có phần tử trùng lặp)
unique_numbers = {1, 2, 3, 3, 4, 5, 5}
print(unique_numbers)   # {1, 2, 3, 4, 5}
```

## 5. Câu Lệnh Điều Kiện

### If-Elif-Else

```python
score = 85

if score >= 90:
    grade = "A"
    print("Xuất sắc!")
elif score >= 80:
    grade = "B"
    print("Giỏi!")
elif score >= 70:
    grade = "C"
    print("Khá!")
elif score >= 60:
    grade = "D"
    print("Trung bình!")
else:
    grade = "F"
    print("Cần cố gắng thêm!")

print(f"Điểm: {score} - Xếp loại: {grade}")
```

### Toán Tử So Sánh

```python
x = 10
y = 20

# So sánh
print(x == y)    # False (bằng)
print(x != y)    # True (khác)
print(x < y)     # True (nhỏ hơn)
print(x > y)     # False (lớn hơn)
print(x <= y)    # True (nhỏ hơn hoặc bằng)
print(x >= y)    # False (lớn hơn hoặc bằng)

# Toán tử logic
age = 20
has_id = True

if age >= 18 and has_id:
    print("Được phép vào!")
else:
    print("Không được phép!")
```

## 6. Vòng Lặp

### For Loop

```python
# Lặp qua list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# Lặp với range
for i in range(5):
    print(f"Số: {i}")        # 0, 1, 2, 3, 4

# Range với start và end
for i in range(1, 6):
    print(f"Số: {i}")        # 1, 2, 3, 4, 5

# Range với bước nhảy
for i in range(0, 10, 2):
    print(f"Số chẵn: {i}")   # 0, 2, 4, 6, 8
```

### While Loop

```python
# Đếm từ 1 đến 5
count = 1
while count <= 5:
    print(f"Đếm: {count}")
    count += 1

# Tính tổng các số từ 1 đến 100
total = 0
number = 1
while number <= 100:
    total += number
    number += 1
print(f"Tổng: {total}")  # 5050
```

## 7. Hàm (Functions)

### Định Nghĩa và Gọi Hàm

```python
# Hàm đơn giản
def greet():
    print("Xin chào!")
    print("Welcome to Python!")

greet()  # Gọi hàm

# Hàm có tham số
def greet_person(name):
    print(f"Xin chào, {name}!")

greet_person("Thoai")  # Xin chào, Thoai!

# Hàm trả về giá trị
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")  # 5 + 3 = 8

# Hàm với giá trị mặc định
def introduce(name, age=18):
    print(f"Tôi là {name}, {age} tuổi")

introduce("Thoai", 25)  # Tôi là Thoai, 25 tuổi
introduce("An")         # Tôi là An, 18 tuổi
```

### Hàm Thực Tế

```python
# Tính giai thừa
def factorial(n):
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(f"5! = {factorial(5)}")  # 5! = 120

# Kiểm tra số nguyên tố
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test
for num in range(1, 20):
    if is_prime(num):
        print(f"{num} là số nguyên tố")
```

## 8. Làm Việc Với File

### Đọc File

```python
# Đọc toàn bộ file
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Đọc từng dòng
with open("data.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # strip() xóa khoảng trắng và \n

# Đọc tất cả dòng vào list
with open("data.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    print(lines)
```

### Ghi File

```python
# Ghi file (ghi đè)
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python!\n")
    file.write("Đây là dòng thứ hai\n")

# Ghi file (thêm vào cuối)
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("Dòng được thêm vào\n")

# Ghi list vào file
students = ["An", "Bình", "Chi", "Dũng"]
with open("students.txt", "w", encoding="utf-8") as file:
    for student in students:
        file.write(f"{student}\n")
```

## 9. Xử Lý Lỗi (Exception Handling)

```python
# Try-Except cơ bản
try:
    number = int(input("Nhập một số: "))
    result = 100 / number
    print(f"Kết quả: {result}")
except ValueError:
    print("Lỗi: Bạn phải nhập số!")
except ZeroDivisionError:
    print("Lỗi: Không thể chia cho 0!")
except Exception as e:
    print(f"Lỗi không xác định: {e}")
finally:
    print("Chương trình kết thúc")

# Ví dụ thực tế
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Không thể chia cho 0"
    except TypeError:
        return "Kiểu dữ liệu không hợp lệ"

print(safe_divide(10, 2))   # 5.0
print(safe_divide(10, 0))   # Không thể chia cho 0
print(safe_divide(10, "a")) # Kiểu dữ liệu không hợp lệ
```

## 10. Bài Tập Thực Hành

### Bài 1: Máy Tính Đơn Giản

```python
def calculator():
    print("=== MÁY TÍNH ĐƠN GIẢN ===")
    print("1. Cộng")
    print("2. Trừ")
    print("3. Nhân")
    print("4. Chia")

    choice = input("Chọn phép tính (1-4): ")

    try:
        num1 = float(input("Nhập số thứ nhất: "))
        num2 = float(input("Nhập số thứ hai: "))

        if choice == "1":
            print(f"Kết quả: {num1} + {num2} = {num1 + num2}")
        elif choice == "2":
            print(f"Kết quả: {num1} - {num2} = {num1 - num2}")
        elif choice == "3":
            print(f"Kết quả: {num1} × {num2} = {num1 * num2}")
        elif choice == "4":
            if num2 != 0:
                print(f"Kết quả: {num1} ÷ {num2} = {num1 / num2}")
            else:
                print("Lỗi: Không thể chia cho 0!")
        else:
            print("Lựa chọn không hợp lệ!")
    except ValueError:
        print("Lỗi: Vui lòng nhập số hợp lệ!")

# Chạy máy tính
calculator()
```

### Bài 2: Quản Lý Danh Sách Sinh Viên

```python
students = []

def add_student():
    name = input("Nhập tên sinh viên: ")
    age = int(input("Nhập tuổi: "))
    gpa = float(input("Nhập GPA: "))

    student = {
        "name": name,
        "age": age,
        "gpa": gpa
    }
    students.append(student)
    print(f"Đã thêm sinh viên: {name}")

def display_students():
    if not students:
        print("Danh sách rỗng!")
        return

    print("\n=== DANH SÁCH SINH VIÊN ===")
    for i, student in enumerate(students, 1):
        print(f"{i}. {student['name']} - {student['age']} tuổi - GPA: {student['gpa']}")

def find_top_student():
    if not students:
        print("Danh sách rỗng!")
        return

    top_student = max(students, key=lambda x: x['gpa'])
    print(f"\nSinh viên xuất sắc nhất: {top_student['name']} - GPA: {top_student['gpa']}")

# Menu chương trình
while True:
    print("\n=== QUẢN LÝ SINH VIÊN ===")
    print("1. Thêm sinh viên")
    print("2. Hiển thị danh sách")
    print("3. Tìm sinh viên xuất sắc")
    print("4. Thoát")

    choice = input("Chọn chức năng (1-4): ")

    if choice == "1":
        add_student()
    elif choice == "2":
        display_students()
    elif choice == "3":
        find_top_student()
    elif choice == "4":
        print("Tạm biệt!")
        break
    else:
        print("Lựa chọn không hợp lệ!")
```

## Kết Luận

Chúng ta đã đi qua những kiến thức cơ bản nhất của Python:

✅ Biến và kiểu dữ liệu  
✅ Cấu trúc dữ liệu (List, Dictionary, Tuple, Set)  
✅ Câu lệnh điều kiện (if-else)  
✅ Vòng lặp (for, while)  
✅ Hàm (functions)  
✅ Xử lý file  
✅ Xử lý lỗi

### Bước Tiếp Theo

Để tiếp tục học Python, bạn có thể:

1. **Học OOP (Object-Oriented Programming)**: Class, Object, Inheritance
2. **Thư viện phổ biến**: NumPy, Pandas, Matplotlib cho Data Science
3. **Web Development**: Flask, Django
4. **Machine Learning**: Scikit-learn, TensorFlow, PyTorch
5. **Automation**: Selenium, Beautiful Soup cho web scraping

### Tài Nguyên Học Tập

- [Python Official Documentation](https://docs.python.org/3/)
- [Real Python](https://realpython.com/)
- [Python Tutorial - W3Schools](https://www.w3schools.com/python/)
- [Kaggle Learn Python](https://www.kaggle.com/learn/python)

Chúc bạn học Python vui vẻ! Nếu có câu hỏi, đừng ngại comment bên dưới nhé! 🐍✨

---

_Bài viết được viết bởi Thoai Le. Nếu thấy hữu ích, hãy chia sẻ để nhiều người cùng học nhé!_
