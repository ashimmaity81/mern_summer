console.log("hello");

// const newDate = new Date();
let newDate = null;

const handleDateChange = (e) => {
  newDate = new Date(e.target.value);
  console.log("newDate : ", newDate);
};
