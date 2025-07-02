import {useEffect, useState} from "react";

const App = () => {
  // const getData = () => {
  //   const response = fetch("https://dummyjson.com/users");
  //   response
  //     .then((resp)=> {
  //       const pr2 = resp.json();
  //       return pr2;
  //     })
  //     .catch((err)=> {
  //       console.log("error",err.message);
  //     })
  //     .then((data)=> {
  //       console.log("data",data);
  //     })
  //     ;
  // };
  const [usersList,setUsersList] = useState([]);
  console.log("START",usersList);
  
  const getData = async () => {
    console.log("inside getData!");
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log("Data",data);
    const {users} =data;
    setUsersList(users);
  }
  console.log("before getData");
  // getData();
  console.log("getData called");
  useEffect(()=> {
    getData();
  },[])

  return (
    <div>
      <h1>Hello</h1>
      {
        usersList.map((elem)=> {
          return (
            <div key={elem.id}>
              <h3>{elem.firstName}</h3>
            </div>
          )
        })
      }
    </div>
  );

};
export default App;
