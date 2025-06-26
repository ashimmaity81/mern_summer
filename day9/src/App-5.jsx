//function re-run ===> component re-rendering
//react re-render's component EITHER on "state" OR "props" change

import {useState} from "react";
//hook --> function given to use by react

const App = () => {
  const [searchText,setSearchText] = useState(()=> {
    const val = localStorage.getItem("searchText");
  if(val){
    return val;
  }
  else{
    return "arun";
  }
});
  console.log(searchText);
  const handleSearch = (e) => {
    // console.log(e);
    const val = e.target.value;
    localStorage.setItem("seachText",val);
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearch}/>
      <h2>{searchText}</h2>
    </div>
  );
};
export default App;