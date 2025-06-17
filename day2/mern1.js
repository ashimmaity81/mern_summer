// const printBill = (txt) => {
//     console.log("-----------");
//     console.log("Rs. ", txt);
//     console.log("-----------");
// };
const printBillFood = (txt) => {
    console.log("-----------");
    console.log("Your total bill is:");
    console.log("Rs. ", txt);
    console.log("-----------");
};
const printBillFoodAndDrink = (txt) => {
    console.log("-----------");
    console.log("Your total bill for food and clotehs is:");
    console.log("Rs. ", txt);
    console.log("-----------");
};
const printBillForAll = (txt) => {
    console.log("-----------");
    console.log("Your total bill for all is:");
    console.log("Rs. ", txt);
    console.log("-----------");
};

const calculateBillAmountForFood = (price) => {
    return price * 1.05;
}
const calculateBillAmountForClothes = (price) => {
    return price * 1.12;
}
const calculateBillAmountForDrinks = (price) => {
    return price * 1.2;
}
const totalBill = (food, clothes, drinks, cb) => {
    const foodsAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount = calculateBillAmountForFood(drinks);

    const finalAmount = foodsAmount + clothesAmount + drinksAmount;
    // printBill(finalAmount);
    cb(finalAmount);
}

totalBill(100, 200, 100, printBillForAll);
totalBill(100, 200, 0, printBillFoodAndDrink);
totalBill(100, 0, 0, printBillFood);