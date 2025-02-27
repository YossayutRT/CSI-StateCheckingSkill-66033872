// คำนวณพื้นที่วงกลม
function calculateCircleArea() {
    try {
        let radius = parseFloat(prompt("ป้อนค่ารัศมี:"));
        if (isNaN(radius) || radius <= 0) {
            throw new Error("ค่ารัศมีไม่ถูกต้อง");
        }
        let area = Math.PI * radius * radius;
        console.log("พื้นที่วงกลม:", area);
        document.getElementById("output").innerText = `พื้นที่วงกลม = ${area.toFixed(2)}`;
    } catch (error) {
        console.error(error);
        alert("กรุณาป้อนค่ารัศมีที่ถูกต้อง!");
    }
}

//Pseudocode
// FUNCTION calculateCircleArea
// ขอให้ผู้ใช้ป้อนค่ารัศมี
//     PRINT "ป้อนค่ารัศมี:"
//     INPUT radius

//แปลงค่ารัศมีเป็นตัวเลขทศนิยม
//     radius = CONVERT_TO_FLOAT(radius)

//ตรวจสอบว่าค่ารัศมีเป็นตัวเลขและมีค่ามากกว่า 0
//     IF radius IS NOT A NUMBER OR radius <= 0 THEN
//         PRINT "ค่ารัศมีไม่ถูกต้อง"
//         RETURN

//คำนวณพื้นที่ของวงกลม
//     area = PI * (radius * radius)

// แสดงผลพื้นที่
//     PRINT "พื้นที่วงกลม =", area
// END FUNCTION
  



// ตรวจสอบช่วงอายุ

function checkAgeCategory() {
    try {
        let age = parseInt(prompt("ป้อนอายุของคุณ:"));
        if (isNaN(age) || age < 0 || age > 120) {
            throw new Error("อายุไม่ถูกต้อง");
        }
        let category;
        if (age < 7) category = "วัยทารก";
        else if (age < 12) category = "วัยก่อนเรียน";
        else if (age < 18) category = "วัยเรียน";
        else if (age < 21) category = "วัยรุ่น";
        else if (age <= 35) category = "วัยผู้ใหญ่";
        else if (age <= 60) category = "วัยกลางคน";
        else category = "วัยสูงอายุ";
        
        console.log("ช่วงอายุ:", category);
        document.getElementById("output").innerText = `ช่วงอายุคือ : ${category}`;
    } catch (error) {
        console.error(error);
        alert("กรุณาป้อนอายุที่ถูกต้อง!");
    }
}

// ตรวจสอบเลขคู่-คี่
function checkEvenOrOdd() {
    try {
        let number = parseInt(prompt("ป้อนตัวเลข:"));
        if (isNaN(number)) {
            throw new Error("ตัวเลขไม่ถูกต้อง");
        }
        let result = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
        console.log("ผลลัพธ์:", result);
        document.getElementById("output").innerText = `${number} เป็น ${result}`;
    } catch (error) {
        console.error(error);
        alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
    }
}


// แสดงเลข 1-10 ด้วย For Loop
function displayNumbers() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    document.getElementById("output").innerText = result;
}

// รับค่าจากผู้ใช้ด้วย While Loop
function startInputLoop() {
    let result = "";
    while (true) {
        let input = prompt("พิมพ์ข้อความ (พิมพ์ 'exit' เพื่อออก): ");
        if (input.toLowerCase() === "exit") break; // ป้อนข้อความ 'exit' เพื่อออก
        result += input + "\n";
    }
    document.getElementById("output").innerText = result || "ออกจากโปรแกรมแล้ว";
}

// สุ่มตัวเลขและเรียงลำดับ
function sortRandomNumbers() {
    let numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    
    let randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        randomNumbers.push(numbers[randomIndex]);
    }

    document.getElementById("output").innerText = "5 ตัวที่สุ่มมา: " + randomNumbers.join(", ");

    for (let i = 0; i < randomNumbers.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < randomNumbers.length; j++) {
            if (randomNumbers[j] < randomNumbers[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [randomNumbers[i], randomNumbers[minIndex]] = [randomNumbers[minIndex], randomNumbers[i]];
        }
    }

    setTimeout(() => {
        document.getElementById("output").innerText += "\nหลังเรียง: " + randomNumbers.join(", ");
    }, 500);
}

// คำนวณ Factorial
function calculateFactorial() {
    function factorial(n) {
        return n === 0 ? 1 : n * factorial(n - 1);
    }

    let num = parseInt(prompt("ป้อนตัวเลขเพื่อหาค่า Factorial:"));
    if (isNaN(num) || num < 0) {
        alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
        return;
    }
    document.getElementById("output").innerText = `Factorial(${num}) = ${factorial(num)}`;
}

// คำนวณ Fibonacci

//สูตรการคำนวน https://www.calculatorsoup.com/calculators/discretemathematics/fibonacci-calculator.php
function calculateFibonacciSequence() {
    function nthFibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return nthFibonacci(n - 1) + nthFibonacci(n - 2);
    }

    let num = parseInt(prompt("ป้อนจำนวน Fibonacci:"));
    if (isNaN(num) || num < 0) {
        alert("กรุณาป้อนตัวเลขที่ถูกต้อง!");
        return;
    }
    document.getElementById("output").innerText = `Fibonacci(${num}) = ${nthFibonacci(num)}`;
}
