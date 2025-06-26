//function re-run ===> component re-rendering
//react re-render's component EITHER on "state" OR "props" change

import {useState} from "react";
//hook --> function given to use by react

const App = () => {
  // let searchText = "Arun";
  const [monitor,remote] = useState(0);
  console.log(monitor);

  const handleClick = (e) => {
    remote((prev) => {
      return prev+1;
    });
    remote((prev) => {   // it will create chain as the prev is depend upon the previous value (prev)
      return prev+1;
    });
    console.log(monitor);
  }
  return (
    <div>
      <h1>Click Here !</h1>
      <button onClick={handleClick}>Click Me</button>
      <h1>{monitor}</h1>
    </div>
  );
};
export default App;