function sayMyName(){
    console.log("M")
    console.log("O")
    console.log("N")
    console.log("U")
}
// sayMyName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
}
// addTwoNumber(3, null);

function addTwoNumbers(number1, number2){
    // let  result =  number1 + number2;
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(3, 8);
// console.log("Result: ", result);

function loginUserMessage (username = "sam"){
    if(!username){  // username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Monu"));

function calculateCartprice(val1, val2, ...num1) { // ... (rest operator)
    return num1;
}
console.log(calculateCartprice(100, 200,350,500, 2000));

const user = {
    username: "Monu Yadav",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} Price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
    username: "Monu",
    price : 499
})

const myNewArray = [100, 200, 300, 500]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));