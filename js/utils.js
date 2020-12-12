function menu() {
  var x = document.getElementById("menu-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
let theme_no = 0;
function theme() {
  if (theme_no == 0) {
    theme_no = 1;
    document.documentElement.style.setProperty("--main-bg", "black");
    document.documentElement.style.setProperty("--main-bg2", "white");
    document.getElementById("clock").id = "clock_dark";

    document.getElementById("tz-c1").className = "timezone-clock_dark";
    document.getElementById("tz-c2").className = "timezone-clock_dark";
    document.getElementById("tz-c3").className = "timezone-clock_dark";

    document.getElementById("theme").src="https://i.ibb.co/QFpDYhr/theme-l.png"
    document.getElementById("menu-icon").src="https://i.ibb.co/Nrj2xtD/list-l.png"
  } else {
    theme_no = 0;
    document.documentElement.style.setProperty("--main-bg", "white");
    document.documentElement.style.setProperty("--main-bg2", "black");
    document.getElementById("clock_dark").id = "clock";
    
    document.getElementById("tz-c1").className = "timezone-clock";
    document.getElementById("tz-c2").className = "timezone-clock";
    document.getElementById("tz-c3").className = "timezone-clock";
    
    document.getElementById("theme").src="https://i.ibb.co/zrK9B08/theme-d.png"
    document.getElementById("menu-icon").src="https://i.ibb.co/6sfZNJR/list-d.png"

    // root.style.setProperty("--main-bg","white")
  }
}
