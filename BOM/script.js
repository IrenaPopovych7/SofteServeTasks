// --------------------------------TASK1------------------------------
// function openWindow() {
//   myWindow = window.open("", "", "width=300, height=300");
// }
// openWindow();

// function extenedWind() {
//   myWindow.resizeTo(500, 500);
// }
// setTimeout(extenedWind, 2000);

// function moveWind() {
//   myWindow.moveTo(200, 200);
// }
// setTimeout(moveWind, 4000);
// function closeW() {
//   myWindow.close();
// }
// setTimeout(closeW, 6000);

// --------------------------------TASK2------------------------------

let btn = document.getElementById("btn");
function changeCSS() {
  let p = document.getElementById("text");
  p.className += "orange";
}
btn.addEventListener("click", () => {
  changeCSS();
});

// --------------------------------TASK3------------------------------
const blueColor = document.getElementById("blue");
const pinkColor = document.getElementById("pink");
const brownColor = document.getElementById("brown");
const yellowColor = document.getElementById("hovering");

blueColor.onclick = () => {
  document.body.style.backgroundColor = "blue";
};
pinkColor.ondblclick = () => {
  document.body.style.backgroundColor = "pink";
};
brownColor.onmousedown = () => {
  document.body.style.backgroundColor = "brown";
};
brownColor.onmouseup = () => {
  document.body.style.backgroundColor = "white";
};
yellowColor.onpointerover = () => {
  document.body.style.backgroundColor = "yellow";
};
yellowColor.onpointerout = () => {
  document.body.style.backgroundColor = "white";
};

// / --------------------------------TASK4------------------------------
let el = document.getElementById("names");
let btnRemove = document.getElementById("drop_down_list");
btnRemove.addEventListener("click", () => {
  if (el.selectedIndex !== -1) {
    el.remove(el.selectedIndex);
  }
});
// / --------------------------------TASK5------------------------------
let liveBtn = document.getElementById("btn");
let btnStatus = document.querySelector("#status_output");
liveBtn.onclick = (event) => {
  btnStatus.textContent = "I was pressed!";
};
liveBtn.onpointerover = (event) => {
  btnStatus.textContent = "Mouse on me!";
};
liveBtn.onpointerout = (event) => {
  btnStatus.textContent = "Mouse is not on me!";
};

// / --------------------------------TASK6------------------------------
function trackWindowSize() {
 let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  document.getElementById("dimensions").innerText =
    "Розмір вікна: " + width + " x " + height;
}

window.addEventListener("resize", trackWindowSize);

// / --------------------------------TASK7------------------------------

function changeDropDownValue(value) {
  let commonValues = {
    Germany: ["Berlin", "Hamburg", "Munich", "Bonn"],
    USA: ["New York", "Chicago", "Austin", "Oregon", "Dallas"],
    Ukraine: ["Kyiv", "Odessa", "Dnipro", "Lviv"],
  };
  if (value.length == 0) {
    document.getElementById("city").innerHTML = "<option></option>";
  } else {
    let commonOptions = "";
    for (elem in commonValues[value]) {
      commonOptions += "<option>" + commonValues[value][elem] + "</option>";
    }
    document.getElementById("city").innerHTML = commonOptions;
  }
}
