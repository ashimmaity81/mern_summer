const fs = require("node:fs");
console.log("START");
const response = fs.readFileSync("./temp.txt", "utf-8");
console.log(response);
const response1 = fs.readFileSync("./student.txt", "utf-8");
console.log(response1);
console.log("END");
