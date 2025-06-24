// console.log("hello from day7 !");

// const rootElem = document.getElementById("root");
// const item1 = document.createElement("li");
// item1.innerText = "item1";

// const item2 = document.createElement("li");
// item2.innerText = "item2";

// const list = document.createElement("ul");
// list.appendChild(item1);
// list.appendChild(item2);

// rootElem.appendChild(list);

const item1 = React.createElement("li", {}, "Item1");
console.log(item1);
const item2 = React.createElement("li", {}, "item2");

const list = React.createElement("ul", {}, [item1, item2]);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
