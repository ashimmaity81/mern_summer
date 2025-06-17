// const cse018 = {
//     name: "Subhodeep",
//     address: "Kolkata, WB",
//     bloodGroup: "O-",
// }
// const cse075 = {
//     name: "Shinivas",
//     address: "Hyderabad, TS",
//     bloodGroup: "O+",
// }
// const studentName = cse018.name;
// console.log("StudentName : ",studentName);

// cse018.bloodGroup ="A+";
// cse018.college = "LPU";
// delete cse018.address;
// console.log("CSE018 : ",cse018);


// const person = {
//     name: 'Ashim',
//     height: '1.76',
//     weight: '60',
//     college: 'LPU',
//     rollNumber: '81',
//     getBMI: function () {
//         const res=this.weight/this.height **2;
//         // console.log(this.height,this.weight);
//         console.log(`BMI for ${this.name} is ${res}`);
//         if(res>26){
//             console.log("overweight");
//         }
//         else if(res<26 && res>18){
//             console.log("Normal");
//         }
//         else{
//             console.log("Underweight");
//         }
//     }
// }
// person.getBMI();

// const allkeys=Object.keys(person);
// console.log("allkeys:",allkeys);
// const allValues=Object.values(person);
// console.log("allValues:",allValues);
// const allEntries=Object.entries(person);
// console.log("allEntries:",allEntries);

const person = {
    name: 'Ashim',
    height: '1.76',
    weight: '60',
    college: 'LPU',
    rollNumber: '81',
};

// const {weight,height} = person;
// console.log(weight,height);

const person2={...person};
person2.name="John";
console.log(person);
console.log(person2);


