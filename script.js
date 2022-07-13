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

function sum() {
    result = Number(input1.value)+Number(input2.value);
    showResult ();
}

function sub() {
    result = Number(input1.value)-Number(input2.value);
    showResult ();
}
function mult() {
    result = Number(input1.value)*Number(input2.value);
    showResult ();
}
function division() {
    result = Number(input1.value)/Number(input2.value);
    showResult ();
}

// функция для изменения фона div по клику //

function ChangeBgC() {
    let div = document.getElementsByClassName("color");
    div[0].style.background = "blue";
}