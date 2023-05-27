// --------------------------------TASK1------------------------------
function getPromise(massage, delay) {
  return new Promise((res) => {
  setTimeout (console.log(massage), delay);
  })
}
getPromise("test promise", 2000);

// --------------------------------TASK2------------------------------
 function calcArrProduct(arr) {
   return new Promise((resolve, reject) => {
     const isNumber = arr.every((element) => typeof element === "number");
     if (isNumber) {
       const product = arr.reduce(
         (accumulator, currentValue) => accumulator * currentValue,
         1
       );
       resolve(product);
     } else {
       reject(new Error("Error! Incorrect array!"));
     }
   });
 }


calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));

// --------------------------------TASK3------------------------------
new Promise(function (resolve, reject) {
  let number = prompt("Введіть число:");

  if (isNaN(number)) {
    reject(new Error("Введено не число!"));
  } else {
    resolve(Number(number));
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      let number = prompt("Введено не число! Введіть число:");

      if (isNaN(number)) {
        reject(new Error("Введено не число повторно!"));
      } else {
        resolve(Number(number));
      }
    });
  })
  .then(function (result) {
    console.log("Введене число:", result);
  });


// --------------------------------TASK4------------------------------
const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i <= 9; i++) {
    const time = Math.random() * 3000; 
    const number = await delay(i, time);
    console.log(number);
  }
}

showNumbers();
