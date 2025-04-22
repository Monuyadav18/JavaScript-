const user = {
    username: "Monu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessage();
// user.username = "Coders!";
// user.welcomeMessage();

// console.log(this);
 
function code(){
    let username = "coding";
    console.log(this.username); // => can't access in the function only for the objects.
}
// code();

const chai = () => {
    let username = "coding";
    // console.log(this);
}
chai();

// const addTwo = (num1, num2) => {
    // return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Monu"})
console.log(addTwo(3, 4));