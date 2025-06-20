console.log("START");

const timeDelaysInMs = 10000;
const callbackFunc = () => {
  console.log("Hello");
};
window.setTimeout(callbackFunc, timeDelaysInMs);
// window.setInterval(callbackFunc, timeDelaysInMs);

console.log("END");
