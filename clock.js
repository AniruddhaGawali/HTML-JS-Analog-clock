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
}, 1000);

h_ = 0;
m_ = 0;
s_ = 0;
let timer;

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
