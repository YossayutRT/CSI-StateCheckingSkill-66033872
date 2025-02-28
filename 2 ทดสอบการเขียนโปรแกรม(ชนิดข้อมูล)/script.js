document.addEventListener("DOMContentLoaded", function() {
    const basicData = document.getElementById("basic-data");
    const dataStructures = document.getElementById("data-structures");
    const jsonData = document.getElementById("json-data");

    // 1. พื้นฐานของตัวแปรและชนิดข้อมูล
    let text = "Hello, World!";
    let number = 42;
    let isValid = true;

    basicData.innerHTML += `<p>String: <strong>${text}</strong></p>`;
    basicData.innerHTML += `<p>Integer: <strong>${number}</strong></p>`;
    basicData.innerHTML += `<p>Boolean: <strong>${isValid}</strong></p>`;

    // การแปลงชนิดข้อมูล
    let num = parseInt("10");
    let pi = parseFloat("3.14");
    let textNum = (100).toString();

    basicData.innerHTML += `<p>Parsed Int: <strong>${num}</strong></p>`;
    basicData.innerHTML += `<p>Parsed Float: <strong>${pi}</strong></p>`;
    basicData.innerHTML += `<p>Number to String: <strong>${textNum}</strong></p>`;

    // 2. สร้างและใช้งานโครงสร้างข้อมูล
    // List / Array
    let fruits = ["Apple", "Banana", "Cherry"];
    fruits.push("Ponlamai");
    fruits.splice(1, 1);
    fruits[0] = "Apricot"; 

    dataStructures.innerHTML += `<p>Array: <strong>${fruits.join(", ")}</strong></p>`;

    // Dictionary / Object
    let student = { name: "Tom", age: 20, grade: "A" };
    dataStructures.innerHTML += `<p>Student: <pre>${JSON.stringify(student, null, 2)}</pre></p>`;

    // Tuple & Set
    let tuple = ["Apple", 10, true]; 
    let uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
    dataStructures.innerHTML += `<p>Tuple-like: <strong>${tuple.join(", ")}</strong></p>`;
    dataStructures.innerHTML += `<p>Set: <strong>${Array.from(uniqueNumbers).join(", ")}</strong></p>`;

    // 3. จัดการ JSON Data
    let jsonDataContent = '{"name": "Alice", "age": 25, "city": "Bangkok"}';
    let jsonObject = JSON.parse(jsonDataContent); 
    jsonObject.age = 26;
    let newJsonData = JSON.stringify(jsonObject, null, 2);

    jsonData.innerHTML += `<p>Original JSON:</p><pre>${jsonDataContent}</pre>`;
    jsonData.innerHTML += `<p>Modified JSON:</p><pre>${newJsonData}</pre>`;

});