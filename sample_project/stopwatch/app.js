let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  document.getElementById("display").textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 100);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}
