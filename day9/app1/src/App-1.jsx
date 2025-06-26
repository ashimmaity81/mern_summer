//function re-run ===> component re-rendering
//react re-render's component EITHER on "state" OR "props" change

import {useState} from "react";
//hook --> function given to use by react

const App = () => {
  // let searchText = "Arun";
  const [monitor,remote] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;
    // searchText = value;
    remote(value); //change the value
    console.log(monitor); // show the value
   };
  return (
    <div>
      <h1>Search Here !</h1>
      <input type="text" onKeyUp={handleSearch}></input>
      <h1>{monitor}</h1>
    </div>
  );
};
export default App;