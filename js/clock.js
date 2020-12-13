function locaL_time() {
  time = new Date();
  var time = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
    time.getDay(),
    time.getDate(),
    time.getMonth(),
    time.getMilliseconds()
  ];

  return time;
}

function tz_time(offset) {
  d = new Date();
  utc = d.getTime() + d.getTimezoneOffset() * 60000;
  nd = new Date(utc + 3600000 * offset);
  var time = [
    nd.getHours(),
    nd.getMinutes(),
    nd.getSeconds(),
    nd.getDay(),
    nd.getDate(),
    nd.getMonth(),
    nd.getMilliseconds()
  ];

  return time;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

function set_time(time, pos, city) {
  let hrot = 30 * time[0] + time[1] / 2 + time[2] / 120 + time[6]/120000;
  let mrot = 6 * time[1] + time[2] / 10 + time[6]/10000;
  let srot = time[2] * 6 ;

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (city == null) {
    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;

    document.getElementById("digital-time").innerHTML =
      time[0] + ":" + time[1] + ":" + time[2];
    document.getElementById("date").innerHTML =
      days[time[3]] + "," + " " + time[4] + " " + months[time[5]];
  } else {
    document.getElementsByClassName("tz_hr")[
      pos
    ].style.transform = `rotate(${hrot}deg)`;
    document.getElementsByClassName("tz_min")[
      pos
    ].style.transform = `rotate(${mrot}deg)`;
    document.getElementsByClassName("tz_sec")[
      pos
    ].style.transform = `rotate(${srot}deg)`;

    document.getElementsByClassName("tz_name")[pos].innerHTML = city;
    document.getElementsByClassName("tz_digital")[pos].innerHTML =
      time[0] + ":" + time[1] + ":" + time[2];
    document.getElementsByClassName("tz_date")[pos].innerHTML =
      days[time[3]] + "," + " " + time[4] + " " + months[time[5]];
  }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

setInterval(() => {
  set_time(locaL_time(), null, null);

  set_time(tz_time(0), 0, "LONDON");
  set_time(tz_time(-5), 1, "NEW YORK");
  set_time(tz_time(9), 2, "JAPAN");
}, 1000);

theme_no=0

function theme1() {
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
    
  }
}