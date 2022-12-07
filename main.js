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
    let differenceDisplay = null;
    differenceDisplay = new Date() - startDate;
    lapse = prev + (new Date() - startDate);

    minutesDisplay.innerHTML = ("0" + Math.floor(lapse / (60 * 1000))).slice(
      -4
    );

    secDisplay.innerHTML = ("0" + (Math.floor(lapse / 1000) % 60)).slice(-2);

    millisecDisplay.innerHTML = (Math.floor((lapse % 1000) / 10) + "0").slice(
      0,
      2
    );
  }, 10);
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
  millisecDisplay.innerHTML = "00";
};
