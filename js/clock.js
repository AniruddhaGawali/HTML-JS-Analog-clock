setInterval(() => {
  // console.log('HI ITS AKG')
  time = new Date();
  h = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();

  hrot = 30 * h + m / 2 + s / 120;
  mrot = 6 * m + s / 10;
  srot = s * 6;

  hr.style.transform = `rotate(${hrot}deg)`;
  min.style.transform = `rotate(${mrot}deg)`;
  sec.style.transform = `rotate(${srot}deg)`;

  document.getElementById("digital-time").innerHTML = h + ":" + m + ":" + s;
  // console.log(document.getElementById("digital-time").innerHTML = h + ":" + m + ":" + s)
}, 1000);

h_ = 0;
m_ = 0;
s_ = 0;
let timer;

function calcTime(city, offset) {

  d = new Date();

  utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  nd = new Date(utc + (3600000*offset));

  var time=[nd.getHours(),nd.getMinutes(),nd.getSeconds()]

  return time;

}
console.log( calcTime("london",1))


function set_tz(city,offset,pos) {

  tz_time=calcTime(city,offset)

  let hrot_ = 30 * tz_time[0] +  tz_time[1] / 2 +  tz_time[2] / 120;
  let mrot_ = 6 *  tz_time[1] + tz_time[2]  / 10;
  let srot_ = tz_time[2] * 6;

  document.getElementsByClassName("tz_hr")[pos].style.transform = `rotate(${hrot_}deg)`;
  document.getElementsByClassName("tz_min")[pos].style.transform = `rotate(${mrot_}deg)`;
  document.getElementsByClassName("tz_sec")[pos].style.transform = `rotate(${srot_}deg)`;

  document.getElementsByClassName("tz_name")[pos].innerHTML = city;
  document.getElementsByClassName("tz_digital")[pos].innerHTML = tz_time[0] + ":" + tz_time[1] + ":" + tz_time[2];

}
setInterval(() => {
  
  set_tz("  LONDEN ",0,0)
  set_tz("NEW YORK",-5,1)
  set_tz("  JAPAN ",9,2)
}, 1000);



function start() {
  document.getElementById("startbutton").disabled = true;
  timer = setInterval(start_, 1000);
}
function start_() {
  s_ = s_ + 1;
  
  stopwatch_hand.style.transform = `rotate(${s_ * 6}deg)`;
  
  if (s_ == 60) {
    m_ = m_ + 1;
    s_ = 0;
  }
  if (m_ == 60) {
    h_ = h_ + 1;
    m_ = 0;
  }
  document.getElementById("counter-time").innerHTML = h_ + ":" + m_ + ":" + s_;
}

function stop() {
  clearInterval(timer);
  document.getElementById("startbutton").disabled = false;
}

function reset() {
  clearInterval(timer);
  h_ = 0;
  m_ = 0;
  s_ = 0;
  stopwatch_hand.style.transform = `rotate(${s_ * 6}deg)`;
  document.getElementById("counter-time").innerHTML = h_ + ":" + m_ + ":" + s_;
  document.getElementById("startbutton").disabled = false;
}
