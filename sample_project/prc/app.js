let countdown;
let remainingSeconds = 0;
let isRunning = false;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById("timer").textContent = formatTime(remainingSeconds);
}

function setTime() {
  const input = document.getElementById("inputSeconds").value;
  remainingSeconds = parseInt(input, 10);
  updateDisplay();
}

function startTimer() {
  if (!isRunning && remainingSeconds > 0) {
    isRunning = true;
    countdown = setInterval(() => {
      remainingSeconds--;
      updateDisplay();

      if (remainingSeconds <= 0) {
        clearInterval(countdown);
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(countdown);
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = 0;
  updateDisplay();
}
