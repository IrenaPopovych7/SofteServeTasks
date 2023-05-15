//-------------------------------------------------TASK 1
const list = document.getElementById("list");
console.log(
  `Output result: 
  ${list.elemen}` //null????
);
//-------------------------------------------------TASK 2
// function myFunction(){
//   let head = document.getElementsByTagName("h1");
//   head.classList.add("header");
// }
// myFunction();

//-------------------------------------------------TASK 6
function displayTime() {
  let currentDate = new Date();
  let month = currentDate.getMonth();
  let today = currentDate.getDay();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let secondes = currentDate.getSeconds();
  let amORpm = "AM";
  if (hours >= 12) {
    amORpm = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  let monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + secondes + " " + amORpm;
    document.getElementById("date").innerHTML = monthes[month]+ " " + today;
}
setInterval(displayTime, 1000);
