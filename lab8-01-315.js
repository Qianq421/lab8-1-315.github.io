// 学生数据
const students = [
    "白林涵", "陈昊妍", "董萌萌", "范昱涵", "高一涵",
    "郭超", "侯宪坤", "黄博", "姜子超", "鞠忠宏",
    "李茂川", "李永乐", "李云", "林佳祺", "吕君蕊",
    "秦金龙", "秦士淞", "孙家豪", "孙若冰", "孙义凯",
    "孙子凌", "索京奥", "王朝闻", "王俊豪", "王梦月",
    "王文昌", "王运旺", "王祉盛", "卫学振", "武启航",
    "徐浩文", "许广洋", "许源赫", "薛景文", "张丁文",
    "张静", "张俊飞", "张艳可", "张云翔", "张志恒",
    "赵宝华", "赵家豪", "周政涟", "邹谦慧"
];

// 获取DOM元素
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const studentList = document.getElementById('studentList');
const selectedStudent = document.getElementById('selectedStudent');

// 初始化变量
let timer = null;
let isRunning = false;

// 初始化学生列表
function initStudentList() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.textContent = student;
        studentList.appendChild(studentElement);
    });
}

// 随机选择学生
function randomSelect() {
    // 清除之前的高亮
    const highlighted = document.querySelectorAll('.student.highlight');
    highlighted.forEach(el => el.classList.remove('highlight'));
    
    // 使用Math对象随机选择一个学生
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomStudent = students[randomIndex];
    
    // 高亮显示选中的学生
    const studentElements = document.querySelectorAll('.student');
    studentElements[randomIndex].classList.add('highlight');
    
    return randomStudent;
}

// 开始随机选择
function startSelection() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    selectedStudent.textContent = '选择中...';
    
    // 使用定时器每100毫秒更换一个随机学生
    timer = setInterval(() => {
        const student = randomSelect();
        selectedStudent.textContent = student;
    }, 100);
}

// 停止随机选择
function stopSelection() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    // 显示最终选中的学生
    const finalStudent = selectedStudent.textContent;
    selectedStudent.textContent = finalStudent;
}

// 添加事件监听
startBtn.addEventListener('click', startSelection);
stopBtn.addEventListener('click', stopSelection);

// 页面加载时初始化学生列表
window.addEventListener('DOMContentLoaded', initStudentList);