// 1.
// Напишіть клас Круг та реалізуйте функціонал:
//  - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
//  - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
//  - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//  - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
//  - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
//  - Визначте метод перевірки попадання крапки до кола;
//  - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
class Raund {
  constructor(centerX, centerY, radius) {
    this.centerX = +prompt("Enter parameters of centerX");
    this.centerY = +prompt("Enter parameters of ${centerY}");
    this.radius = +prompt("Enter parameters of ${radius}");
  }
  showOb() {
    console.log(this.centerX);
    console.log(this.centerY);
    console.log(this.radius);
  }
}
let circle = new Raund();

circle.showOb();

// 2.

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
function propsCount(obj) {
  let count = 0;
  for (props in obj) {
    count++;
  }
  return count;
}
console.log(propsCount(mentor)); // 3
// 3.
// Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи.
//  - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
//  - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
//  - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4
class Person {
  constructor(firstName, surname) {
    this.firstName = prompt(`What is your firstName?`);
    this.surname = prompt(`What is your surname?`);
  }
  showFullName() {
    console.log(`Your name is ${this.firstName} ${this.surname}`);
  }
}
let me = new Person();
me.showFullName();
class Student extends Person{
  constructor(year){
    this.year = +prompt('Please enter the year you entered the university');
  }
  showFullName(midleName){
    let midleName = prompt("Enter your midle name, please");
    
  }
}
// 4.
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
//  - поле, яке зберігає колір маркера;
//  - поле, яке зберігає кількість чорнила в маркері (у відсотках);
//  - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
//     1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
//     2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//     3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//     4) Вивести значення зарплати з новим experience.
//     5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value
//     6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson

// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584
