let showMessage = () =>{
    let name=prompt('Как тебя зовут?')
    alert(`Привет, ${name}! Давай посчитаем :)`);
}

const input1 = document.querySelector (".number1");
const input2 = document.querySelector (".number2");
const div = document.querySelector(".out");

let result;

function showResult() {
    div.textContent = `Результат: ${result}`;
}
function clear(){
    document.getElementById('errorMessage').innerHTML="";
}

function sum() {
    clear()
    result = Number(input1.value)+Number(input2.value);
    showResult ();
}

function sub() {
    clear()
    result = Number(input1.value)-Number(input2.value);
    showResult ();
}
function mult() {
    clear()
    result = Number(input1.value)*Number(input2.value);
    showResult ();
}

function division() {
    clear()
        if (input2.value == 0){
            document.getElementById('errorMessage').innerHTML = "На 0 делить нельзя!";
    } 
        result = Number(input1.value)/Number(input2.value);
        showResult ();             
}


// функция для изменения фона div по клику //

function ChangeBgC() {
    let div = document.getElementsByClassName("color");
    div[0].style.background = "blue";
}

// функции для изменения Темы //

function changeTheme() {    
    if (document.getElementById("theme").value == "default")
    document.body.style.background = "white";
    if (document.getElementById("theme").value == "dark")
    document.body.style.background = "#2f4f4f";
    if (document.getElementById("theme").value == "light")
    document.body.style.background = "#faf0e6";
}