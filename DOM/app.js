//-------------------------------------------------TASK 1
const list = document.getElementById("list");
const liElem = list.getElementsByTagName("li");
const firstChild = liElem[0].innerHTML;
const lastClildEl = liElem[4].innerHTML;
const secondChild = liElem[1].innerHTML;
const fourthClildEl = liElem[3].innerHTML;
const thirthChild = liElem[2].innerHTML;

console.log(`Output result : ${firstChild}, ${lastClildEl}, ${secondChild}, ${fourthClildEl}, ${thirthChild}`);
//-------------------------------------------------TASK 2
function myFunction(){
  let headerBig = document.getElementsByTagName('h1')[0];
  headerBig.classList.add("header");

  let parentEl = document.getElementById("myDiv");
  parentEl.firstElementChild.classList.add("bold");
  parentEl.lastElementChild.classList.add("italic");
  parentEl.children[1].style.color = "red";
  parentEl.children[2].classList.add("underline");

  let ulElem = document.getElementById("myList").getElementsByTagName("li");
 for (let i = 0; i < ulElem.length; i++){
  ulElem[i].classList.add("horizontal");

  let spanElem = document.getElementsByTagName("span")[0];
  spanElem.classList.add("invisibale");
 }
}
myFunction();

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
