theme_no = 0;
function theme2() {
  if (theme_no == 0) {
    theme_no = 1;
    document.documentElement.style.setProperty("--main-bg", "black");
    document.documentElement.style.setProperty("--main-bg2", "white");
    document.getElementById("clock").id = "clock_dark";

    document.getElementById("theme").src =
      "https://i.ibb.co/QFpDYhr/theme-l.png";
    document.getElementById("menu-icon").src =
      "https://i.ibb.co/Nrj2xtD/list-l.png";
  } else {
    theme_no = 0;
    document.documentElement.style.setProperty("--main-bg", "white");
    document.documentElement.style.setProperty("--main-bg2", "black");
    document.getElementById("clock_dark").id = "clock";

    document.getElementById("theme").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("menu-icon").src =
      "https://i.ibb.co/6sfZNJR/list-d.png";
  }
}

let timer = 0;
let m = "00";
let h = "00";
var temp = " "
function stopwatch() {
  if (timer=="00") {
    timer=0
    
  }
  let srot = timer * 6;
  second.style.transform = `rotate(${srot}deg)`;
  
  if (timer == 60) {
    m = m + 1;
    if (m=="001") {
      m=1
    }
    timer=0
  }
  if (m == 60) {
    h = h + 1;
    if (h=="001") {
      h=1
    }
    m=0
  }
  temp= h + ":"+ m +":"+ timer
  // console.log(temp)
  document.getElementById("digital_timer").innerHTML = temp;
  timer=timer+1
}

let start_timer = null;
function stopwatch_start() {
  start_timer = setInterval(stopwatch, 1000);
  document.getElementsByClassName("btn")[0].disabled = true;
}
function stopwatch_stop() {
  clearInterval(start_timer);
  document.getElementsByClassName("btn")[0].disabled = false;
}
function stopwatch_reset() {
  clearInterval(start_timer);
  m = "00";
  h = "00";
  timer="00"
  srot = timer * 6;
  second.style.transform = `rotate(${srot}deg)`;
  
  document.getElementById("digital_timer").innerHTML = h + ":"+ m +":"+ timer;
  document.getElementById("lap").innerHTML = "";
  document.getElementsByClassName("btn")[0].disabled = false;
}

function stopwatch_lap(){
  var node = document.createElement('li');
  node.appendChild(document.createTextNode(temp));
  document.getElementById("lap").appendChild(node);
}
