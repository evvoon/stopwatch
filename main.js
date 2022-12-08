const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

const minutesDisplay = document.querySelector("#minutes");
const secDisplay = document.querySelector("#sec");
const millisecDisplay = document.querySelector("#millisec");

let interval;
let prev = 0; // last time we stopped
let lapse = 0; // first time clicking

startButton.onclick = () => {
  stopButton.disabled = false;
  resetButton.disabled = false;
  startButton.disabled = true;
  const startDate = new Date();

  interval = setInterval(() => {
    lapse = prev + (new Date() - startDate);

    let minutes = ("0" + Math.floor(lapse / (60 * 1000))).slice(-4);

    minutesDisplay.innerHTML = minutes.length === 1 ? `0${minutes}` : minutes;
    secDisplay.innerHTML = ("0" + (Math.floor(lapse / 1000) % 60)).slice(-2);
    millisecDisplay.innerHTML = Math.floor((lapse % 1000) / 100);
  }, 50);
};

stopButton.onclick = () => {
  startButton.innerHTML = "RESUME";
  prev = lapse;
  startButton.disabled = false;
  clearInterval(interval);
};

resetButton.onclick = () => {
  resetButton.disabled = true;
  stopButton.disabled = true;
  startButton.innerHTML = "START";
  clearInterval(interval);
  lapse = 0;
  prev = 0;
  startButton.disabled = false;
  minutesDisplay.innerHTML = "00";
  secDisplay.innerHTML = "00";
  millisecDisplay.innerHTML = "0";
};
