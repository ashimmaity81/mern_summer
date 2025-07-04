console.log("FILE-START");
const fsPromises = require("node:fs/promises");
const main = async () => {
  console.log("START");
  try {
    const response = await fsPromises.readFile("./temp.txt", "utf-8");
    console.log(response);
  } catch (err) {
    console.log("cannot open file temp.txt --> ", err.message);
  }
  console.log("MID");
  try {
    const response1 = await fsPromises.readFile("./student.txt", "utf-8");
    console.log(response1);
  } catch (err) {
    console.log("cannot open file student.txt --> ", err.message);
  }
  console.log("END");
};

main();
console.log("FILE-END");
