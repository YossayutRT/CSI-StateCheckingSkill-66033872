// เปลี่ยนสีพื้นหลังด้วย addEventListener
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomHexColor();
});

// สร้างสี HEX แบบสุ่ม
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// แสดงข้อความเมื่อคลิกปุ่ม (onclick)
function showMessage() {
    alert("You clicked the button!");
}

// เปลี่ยนสีข้อความเมื่อเมาส์ชี้ (onmouseover)
function changeTextColor(element) {
    element.style.color = getRandomHexColor();
}

// แสดงข้อความที่พิมพ์ใน input (onkeyup)
function showInputValue(input) {
    const outputText = document.getElementById('outputText');
    outputText.textContent = `You typed: ${input.value}`;
}


// ตรวจสอบแบบฟอร์ม
function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    // ตรวจสอบว่าอีเมลมี @ และ .com หรือไม่
    if (!email.includes('@') || !email.includes('.com')) {
        formMessage.textContent = "Email must contain '@' and '.com'";
        formMessage.style.color = "red";
        return false; 
    }

    // หากตรวจสอบผ่าน
    formMessage.textContent = `Hello, ${name}! Your email (${email}) is valid.`;
    formMessage.style.color = "green";
    return true; 
}