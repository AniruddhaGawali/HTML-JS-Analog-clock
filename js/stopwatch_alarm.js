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
    document.getElementById("alarm-img").src =
      "https://i.ibb.co/2n98q5Z/alarm-d.png";
    document.getElementById("alarm-set").src =
      "https://i.ibb.co/rFLSmpd/bell-d.png";
  } else {
    theme_no = 0;
    document.documentElement.style.setProperty("--main-bg", "white");
    document.documentElement.style.setProperty("--main-bg2", "black");
    document.getElementById("clock_dark").id = "clock";

    document.getElementById("theme").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("menu-icon").src =
      "https://i.ibb.co/6sfZNJR/list-d.png";
    document.getElementById("alarm-img").src =
      "https://i.ibb.co/Sx8jbQh/alarm-l.png";
    document.getElementById("alarm-set").src =
      "https://i.ibb.co/RgP7R8s/bell-l.png";
  }
}

let timer = 0;
let m = "00";
let h = "00";
var temp = " ";
function stopwatch() {
  if (timer == "00") {
    timer = 0;
  }
  let srot = timer * 6;
  second.style.transform = `rotate(${srot}deg)`;

  if (timer == 60) {
    m = m + 1;
    if (m == "001") {
      m = 1;
    }
    timer = 0;
  }
  if (m == 60) {
    h = h + 1;
    if (h == "001") {
      h = 1;
    }
    m = 0;
  }
  temp = h + ":" + m + ":" + timer;
  // console.log(temp)
  document.getElementById("digital_timer").innerHTML = temp;
  timer = timer + 1;
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
  timer = "00";
  srot = timer * 6;
  second.style.transform = `rotate(${srot}deg)`;

  document.getElementById("digital_timer").innerHTML =
    h + ":" + m + ":" + timer;
  document.getElementById("lap").innerHTML = "";
  document.getElementsByClassName("btn")[0].disabled = false;
}

function stopwatch_lap() {
  var node = document.createElement("li");
  node.appendChild(document.createTextNode(temp));
  document.getElementById("lap").appendChild(node);
}

const alarmSubmit = document.getElementById("alarmSubmit");

// Add an event listener to the submit button
alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio("");

// function to play the alarm ring tone
function ringBell() {
  audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
      e.preventDefault();
      console.log(document.getElementById("alarm-time").value)
      const alarm = document.getElementById("alarm-time");
      alarmDate = new Date(alarm.value);
      console.log(`Setting Alarm for ${alarmDate}...`);
      document.getElementById("alarmof").innerHTML = `<p>Alarm is Set of</p>
        <p>${alarm.value}</p>`;
      now = new Date();

      let timeToAlarm = alarmDate - now;
      console.log(timeToAlarm);
      document.getElementById("alarm-set").style.display = "flex";
      if (timeToAlarm >= 0) {
        setTimeout(() => {
          console.log("Ringing now");
          document.getElementById("alarm-set").style.display = "none";
          document.getElementById(
            "alarmof"
          ).innerHTML = `<p>Alarm rang at</p> <p>${alarm.value}</p>`;
          // ringBell();
        }, timeToAlarm);
      }
}


const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

if (userPrefersDark) {
  theme2();
}
