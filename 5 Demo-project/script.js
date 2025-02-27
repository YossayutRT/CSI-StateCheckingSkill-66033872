// ฟังก์ชันเพิ่มงานและบันทึกลง localStorage
function addTask() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task) {
        const li = document.createElement("li");
        li.classList.add("task-item");
        
        const taskText = document.createElement("span");
        taskText.textContent = task;
        li.appendChild(taskText);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(removeBtn);
        document.getElementById("todo-list").appendChild(li);
        saveTasks();
        input.value = "";
    }
}

// ฟังก์ชันบันทึกข้อมูลลง localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ฟังก์ชันโหลดข้อมูลจาก localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const taskText = document.createElement("span");
        taskText.textContent = task;
        li.appendChild(taskText);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(removeBtn);
        document.getElementById("todo-list").appendChild(li);
    });
}

// โหลดงานที่บันทึกไว้เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener("DOMContentLoaded", loadTasks);

function calculateGPA() {
    const scores = document.querySelectorAll(".score");
    let totalCredits = 0;
    let totalPoints = 0;

    function getGradePoint(score) {
        if (score >= 85) return 4;
        if (score >= 80) return 3.5;
        if (score >= 75) return 3.25;
        if (score >= 70) return 3;
        if (score >= 65) return 2.5;
        if (score >= 60) return 2.25;
        if (score >= 55) return 2;
        if (score >= 45) return 1;
        return 0;
    }

    for (let score of scores) {
        let value = parseInt(score.value);
        
        // ตรวจสอบค่าคะแนน
        if (isNaN(value) || value < 0 || value > 100) {
            alert("Please enter a valid score between 0 and 100.");
            return; // หยุดการคำนวณทันที
        }

        totalPoints += getGradePoint(value) * 3;
        totalCredits += 3;
    }

    let gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById("gpa-result").textContent = "GPA: " + gpa;
}

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("user-list");
            userList.innerHTML = "";
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        });
}

let lotteryNumber = ""; // เก็บเลขที่สุ่มไว้

    function generateLottery() {
        let numbers = [];
        for (let i = 0; i < 6; i++) {
            numbers.push(Math.floor(Math.random() * 10));
        }
        lotteryNumber = numbers.join("");
    }

    function checkGuess() {
        const guess = document.getElementById("guess-input").value;
        if (guess.length !== 6 || isNaN(guess)) {
            alert("Please enter a valid 6-digit number.");
            return;
        }

        // สุ่มเลขเมื่อตรวจสอบครั้งแรก
        generateLottery();

        if (guess === lotteryNumber) {
            document.getElementById("guess-result").textContent = "🎉 Congratulations! You guessed correctly!";
        } else {
            document.getElementById("guess-result").textContent = "❌ Wrong guess! Try again.";
        }

        // แสดงเลขที่สุ่ม
        document.getElementById("lottery-number").textContent = "Lottery: " + lotteryNumber;
        document.getElementById("lottery-number").style.display = "block";
    }
