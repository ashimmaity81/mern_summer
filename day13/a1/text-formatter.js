console.log("--textFormattter start here--");
const username = "Mohan";

const getCapitalizedText = (txt) => {
  const words = txt.trim().split(" ");
  const resArr = words.map((elem) => {
    const firstChar = elem[0]?.toUpperCase(); //g
    const remainingWord = elem?.slice(1)?.toLowerCase(); //OOD
    return `${firstChar}${remainingWord}`; // `Good`
  });
  return resArr.join(" ");
};
const getCamelCaseText = (txt) => {
  const words = txt.trim().split(" ");
  const resArr = words.map((elem, idx) => {
    if (idx !== 0) {
      const firstChar = elem[0]?.toUpperCase(); //g
      const remainingWord = elem.slice(1)?.toLowerCase(); //OOD
      return `${firstChar}${remainingWord}`; // `Good`
    } else {
      return elem?.toLowerCase();
    }
  });
  return resArr.join("");
};
console.log("Username: ", username);
console.log("--textFormatter ends here--");
module.exports = {
  getCamelCaseText: getCamelCaseText,
  getCapitalizedText: getCapitalizedText,
};

// const res = getCapitalizedText("i am a good student");
// console.log(res);
// const res1 = getCamelCaseText("I am a good student");
// console.log(res1);
