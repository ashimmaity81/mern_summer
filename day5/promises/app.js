const request = window.fetch("https://dummyjson.com/products");
console.log("request: ", request);
console.log("request: ", request);

const succeesCb = (response) => {
  console.log("Response: ", response);
  const pr2 = response.json();

  pr2.then((data) => {
    // console.log("Data : ", data);
    // resnderUI = (data) => {
    //     const {recipes} =data;
    //     recipes.foreach((element))
    // }
  });
};
const errorCb = (err) => {
  alert("Unable to get products --> ", err.message);
};

// request.then(succeesCb).catch(errorCb);
// const resnderUI = (data) => {
//     recipes.foreach((element))
//     const {recipes} =data;
// }
