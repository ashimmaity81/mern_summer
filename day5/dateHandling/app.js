// console.log("hello");

// // const newDate = new Date();
// let newDate = null;

// const handleDateChange = (e) => {
//   newDate = new Date(e.target.value);
//   console.log("newDate : ", newDate);
//   const targetMilliseconds = newDate.getTime();
//   console.log("targetMilliseconds : ", targetMilliseconds);
//   const currentTimeInMilliseconds = Date.now();
//   console.log("currentTimeInMilliseconds : ", currentTimeInMilliseconds);
//   const diffInSeconds = (targetMilliseconds - currentTimeInMilliseconds) / 1000;
//   console.log("diffInSeconds : ", diffInSeconds);
// };

const processPayment = (cb) => {
  cb();
  cb();
};

const processTicketBooking = () => {};

processPayment(processTicketBooking);
