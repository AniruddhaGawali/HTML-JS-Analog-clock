function locaL_time() {
  time = new Date();
  var time= [time.getHours(),time.getMinutes(),time.getSeconds()];

  return time
}


function tz_time(offset) {
  d = new Date();
  utc = d.getTime() + d.getTimezoneOffset() * 60000;
  nd = new Date(utc + 3600000 * offset);
  var time = [nd.getHours(), nd.getMinutes(), nd.getSeconds()];

  return time;
}


// ---------------------------------------------------------------------------------------------------------------------------------------------

function set_time(time, pos, city) {
  let hrot = 30 * time[0] + time[1] / 2 + time[2] / 120;
  let mrot = 6 * time[1] + time[2] / 10;
  let srot = time[2] * 6;

  if (city == null) {
    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;

    document.getElementById("digital-time").innerHTML =
      time[0] + ":" + time[1] + ":" + time[2];
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
  }
}


// ---------------------------------------------------------------------------------------------------------------------------------------------

setInterval(() => {
  set_time(locaL_time(),null,null);

  set_time(tz_time(0),0,"LONDON");
  set_time(tz_time(-5),1,"NEW YORK");
  set_time(tz_time(9),2,"JAPAN");
}, 1000);
