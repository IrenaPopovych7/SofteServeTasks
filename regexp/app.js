// -----------------------------------------TASK 1
const frase = prompt("write something here:");
function upperCase(frase) {
  let regExp = /[A-Z][a-z]*/;
  if (regExp.test(frase)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
upperCase(frase);

// -----------------------------------------TASK 2
const email = prompt("Enter your email adress:");
let emailRegExp = /^[\w\.\-]{3,}@[\w\.]+$/;
function checkEmail(email) {
  console.log(emailRegExp.test(email));
}
checkEmail(email);
// -----------------------------------------TASK 3
const inputString = prompt("Please write two words");
let outputString = inputString.replace(/(\w+)\s+(\w+)/, "$2, $1");
console.log(outputString); 

//  -----------------------------------------TASK 4
const cardNum = prompt("Please enter your card number");
let regularExp = /\d{4}-\d{4}-\d{4}-\d{4}/;
function checkCardNum(cardNum) {
  const validation = regularExp.test(cardNum)
    ? console.log("Great!")
    : console.log("Parameter is invalid!");
  return validation;
}
checkCardNum(cardNum);

//  -----------------------------------------TASK 5
const myEmail = prompt("Enter your email adress:");
let emailExemple = /^(?!-)(?!.*--)[A-Za-z0-9_-]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
function validEmail(myEmail) {
  const valid = emailExemple.test(myEmail)
    ? console.log("Email is correct")
    : console.log("Email is not correct");
  return valid;
}
validEmail(myEmail);

//  -----------------------------------------TASK 6
const login = prompt("Enter your login");
function checkLogin(login) {
  let regExpLogin = /(?!d)[A-Za-z0-9]{2,10}/;
  return regExpLogin.test(login);
}
function matchLogin(login){
    let nums = /[0-9]+(?:\.[0-9]+)?/g;
  return login.match(nums);
}
checkEmail(login);
matchLogin(login);
