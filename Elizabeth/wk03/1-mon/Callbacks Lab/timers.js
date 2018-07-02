console.log('hello world!')
var resetBtn = document.querySelector('#reset');
var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');
var seconds = 0;
var timerId;
var counterDisplay = document.querySelector('#timer'); //=> means Stop Watch

function runResetBtn() {
  clearInterval(timerId);
  counterDisplay.innerText = 'Stop Watch';
  seconds = 0;
}

function runStartBtn() {
  counterDisplay.innerText = seconds; //start from here so it's zero.
  timerId = setInterval(updateTime, 1000);
}

function runPauseBtn() {
  clearInterval(timerId);
}


function updateTime() {
  seconds = seconds + 1;
  counterDisplay.innerText = seconds; //increasing of seconds
  console.log(counterDisplay);
}

startBtn.addEventListener('click', runStartBtn);
pauseBtn.addEventListener('click', runPauseBtn);
resetBtn.addEventListener('click', runResetBtn);