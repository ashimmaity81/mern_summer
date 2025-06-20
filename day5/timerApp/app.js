const timerTextElem = document.getElementById("timer-text");

let timeInSec = 0;
const timerFunc = () => {
  timeInSec++;
  console.log(timeInSec);

  const sec = timeInSec % 60;
  let min = Math.floor(timeInSec / 60);
  min = min % 60;
  const hour = Math.floor(timeInSec / 3600);

  //   timerTextElem.innerText = `${hour < 10 ? "0" + hour : hour}:${
  //     min < 10 ? "0" + min : min
  //   }:${sec < 10 ? "0" + sec : sec}`;

  timerTextElem.innerText = `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};
let timerID = setInterval(timerFunc, 1000);

const handleReset = () => {
  timeInSec = 0;
  timerTextElem.innerText = "00:00:00";
};
const handlePause = () => {
  clearTimeout(timerID);
};
const handleResume = () => {
  timerID = setInterval(timerFunc, 1000);
};
