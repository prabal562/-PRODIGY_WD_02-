let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

function updateDisplay() {
  const format = (val) => (val < 10 ? '0' + val : val);
  document.getElementById('display').textContent =
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function stopStopwatch() {
  running = false;
  clearInterval(timer);
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

// Initialize display
updateDisplay();
