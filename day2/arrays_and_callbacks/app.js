// objects are like {name : "", city : ""}
//whereas the arrays are like {0:"Raj",1:"Delhi"}

// const arr1 = ["tata","mahindra","suzuki","hyundai"];
// const arr2 = ["kia","mitsubisi","byd"];

// console.log(arr);
// console.log(arr[0]);

// const [a,b,c] = arr1;
// console.log(b,c);

// const [x,y,z] = arr2;
// console.log(x,z);

//adding of elements
// const arr3= ["tata","mahindra","suzuki","hyundai"];
// arr3[10]="Honda";

// arr3.push("honda");
// arr3.pop();

// arr3.shift();
// arr3.unshift("kia");

// hybrid insetion and deletion through splice
// syntax : splice(start, no_delete, add_elements)
// arr3.splice(1,2,"kia","honda","byd"); 
// console.log(arr3);

// const arr3= ["tata","mahindra","suzuki","hyundai"];
// console.log(arr3.indexOf("suzuki"));

// const arr = [
//     {name : "Likhilesh", city: "delhi"},
//     {name : "Abhinav", city: "kanpur"}
// ]
// console.log(arr.indexOf({name: "Abhinav", city: "delhi"}));

// console.log({name: "Raj"}=={name: "Raj"});
// const person={name:"Raj"};
// const person2={...person};
// console.log(person==person2);

// const myfunc = (a,b,c,d) => {
//     if(a=="mn") return true;
//     else return false;
// }
// const arr = ["ab","xy","mn","ab","pq"];
// const ele = arr.find(myfunc);
// console.log("ele:",ele);
// const arr1 = [{name : "Likhilesh", city: "delhi"},
//              {name : "Abhinav", city: "kanpur"},
//              {name : "Mohan", city: "kolkata"},
// ]
// const myFunc = (a) => {
//     if(a.name === "Mohan") return true;
//     else return false;
// };
// const ans = arr1.find(myFunc);
// console.log(ans);

const arr1 = [{name : "Likhilesh", city: "delhi",score: 33},
             {name : "Abhinav", city: "kanpur",score: 24},
             {name : "Mohan", city: "kolkata",score: 39},
];
const myFunc = (Element) => {
    if(Element.score<25){
        return {...Element,remark:"fail"};
    }
    else return {...Element,remark:"pass"};
};
const resArr = arr1.map(myFunc);
console.log(resArr);
