const fs = require("node:fs");
console.log("START");
fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err.message);
    return;
  }
  console.log("temp.txt --> ", data);
});
// console.log(response);
fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err.message);
    return;
  }
  console.log("student.txt --> ", data);
});

console.log("END");
