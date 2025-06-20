const title = document.getElementById("greeting");

const handleusername = (e) => {
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);

  // const username = e.target[0].value;
  // const email = e.target[1].value;
  // const password = e.target[2].value;

  const username1 = e.target.usernameTemp.value;
  const email1 = e.target.baseemail.value;
  const password1 = e.target.demopassword.value;

  if (!email1.endsWith("@lpu.in")) {
    alert("Please use your lpu email !");
  } else {
    //call the API
    //send the data -> register the student
  }

  // console.log("Username:", username, username1);
  // console.log("Email:", email, email1);
  // console.log("Password:", password, password1);
  console.log("Username:", username1);
  console.log("Email:", email1);
  console.log("Password:", password1);
};
