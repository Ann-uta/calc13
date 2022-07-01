function showMessage() {
    let name = prompt('Как тебя зовут?')
    alert (`Привет, ${name}! Давай посчитаем :)`);
}
function sum() {
    let a = prompt ('Введи первое слагаемое')
    let b = prompt ('Введи второе слагаемое')
    alert (`Результат: ${Number(a)+Number(b)}`);
}

function sub() {
    let a = prompt ('Введи уменьшаемое')
    let b = prompt ('Введи вычитаемое')
    alert (`Результат: ${Number(a)-Number(b)}`);
}
function mult() {
    let a = prompt ('Введи первый множитель')
    let b = prompt ('Введи второй множитель')
    alert (`Результат: ${Number(a)*Number(b)}`);
}
function division() {
    let a = prompt ('Введи делимое')
    let b = prompt ('Введи делитель')
    alert (`Результат: ${Number(a)/Number(b)}`);
}