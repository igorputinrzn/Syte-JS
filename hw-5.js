//Задание 1
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min (8, 4));
console.log(min (6, 6));

//Задание 2
function isEven(n) {
    if (n % 2 === 0) {
        return `Число четное`;
    } else {
        return `Число не четное`;
    }
}

console.log(isEven (2));
console.log(isEven (3));

//Задание 3
function square(number) {
    console.log(number ** 2);
}

const up = (n) => n ** 2;

square(5);
console.log(up (5));

//Задание 4
function userAge(age) {
    let age = +prompt(`Сколько тебе лет?`);

    if (age < 0) {
        return `Вы ввели неправильное значене`
    } else if (age >= 0 || age <= 12) {
        return `Привет друг`
    } else {
        return `Добро пожаловать`
    }
}

age();

//Задание 5
function calc(a,b) {
    if (isNan(a) && isNan(b)) {
        return `'Одно или оба значения не являются числом'`
    } else {
        return a * b
    }
}

console.log(calc(6 , 2));

//Задание 6
function getNumber() {
    let number = prompt(`Введите число`);
    if (isNan(number)) {
        return `Переданный параметр не является числом`;
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}

console.log(getNumber());

//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return Math.PI * this.radius ** 2;
}

const circle1 = {
    radius: 10, methodGetArea: getArea, methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20, methodGetArea: getArea, methodGetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());