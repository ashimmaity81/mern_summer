//function re-run ===> component re-rendering
//react re-render's component EITHER on "state" OR "props" change

import {useState} from "react";
//hook --> function given to use by react

const App = () => {
  // let searchText = "Arun";
  const [monitor,remote] = useState(()=>{
    const val = localStorage.getItem("counter-value");
    if(val){
      return parseInt(val);
    }
    else{
      return 0;
    }
  });
  console.log(monitor);

  const handleClick = () => {
    remote((prev) => {
      const newValue = prev+1;
      localStorage.setItem("counter-value",newValue);
      return newValue;
      // prev+1;
    });
    console.log(monitor);
  }
  const handleZero = () => {
      remote(0);
      localStorage.setItem("counter-value",0);
  }
  const handleDecrement = () => {
    remote((prev) => {
      const newValue = prev-1;
      localStorage.setItem("counter-value",newValue);
      return newValue;
    });
    console.log(monitor);
  }
  return (
    <div>
      <h1>Click Here !</h1>
      <button onClick={handleClick}> ++ </button>
      <button onClick={handleZero}> 0 </button>
      <button onClick={handleDecrement}> -- </button>
      <h1>{monitor}</h1>
    </div>
  );
};
export default App;