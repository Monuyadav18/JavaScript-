// Primitive

// 7 Types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); 

const bigInt = 6778789249862359n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "Monu",
    Age : 22,
}

const myFunction = function(){
    console.log("Hello Coders!")
}

