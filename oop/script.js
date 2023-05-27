// 1.

class Raund {
  constructor(x, y, radius) {
    this._center = {x:x, y:y};
    this._radius = radius;
  }
  calcPeriment() {
    return 2 * Math.PI * this._radius;
  }
  static perimetr(redius) {
    return 2 * Math.PI * redius;
  }

  circleCopy() {
    return new Raund(...Object.values(this));
  }

  static circleObject(x, y, radius){
    return new Raund(x, y, radius);
  }

  isPointInside(x, y){
    const formula = (x ** 2) + (y ** 2) +(this._radius ** 2);
    formula <= 0 ? console.log("inside") : console.log("outside");
  }

  toString() {
    return `Center is: ${this._center}, radius is ${this._radius}`;
  }}
  const circle = new Raund(0, 0, 5);
  circle.isPointInside(2,10);
  console.log(circle._center);
// 2.

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
  level: "middle"
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
    super();
    this.year = year;
  }
  showFullName(midleName) {
    return `Name is: ${this.name}; Middle name is ${midleName}; Surname is ${this.surname}`;
  }
  showCours() {
    try {
      const date = new Date();
      const course = date.getFullYear() = this.year;
    if (course <= 0 || course >= 6){
      throw new RangeError("The course number is out of range");}
      return course;
    } catch (error){
      console.error(error);
    }  }
  
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCours()); //Current course: 4

// 4.
// 

const text = "FGHJJNMYDDGFYHJDKUJYJK";
class Marker {
  constructor(color, inkQuantity){
    this.color = color;
    this.inkQuantity = inkQuantity;
  
}
print(text) {
  text.split("").forEach(char => {
    document.write(
      `<span style = "color: ${this.color}
      opacity: ${this.inkQuantity};">${char} </span>`
    );
    this.inkQuantity -= 0.05;
  });
}}

class RefillableMarker extends Marker {
  constructor (color, inkQuantity) {
    super(color, inkQuantity);
  }
  print(text) {
    text.split("").forEach(char => {
      while(this.inkQuantity < 1) {
        this.refill();
      }
      document.write(
        `<span style="color: ${this.color};
        opacity: ${this.inkQuantity};"> ${char} </span>`
      );
      this.inkQuantity -= 0.05;
    });
  }
  refill() {
    this.inkQuantity += 0.05;
  }
}
let marker = new Marker("red", 0.5);
marker.print(text);
let marker2 = new Marker("white", 1);
let refillableMarker = new RefillableMarker("green", 1);
refillableMarker.print(text);
let refillableMarker2 = new RefillableMarker("blue", 0.6);
refillableMarker2.print(text);

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
