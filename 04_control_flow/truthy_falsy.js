const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// Falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values -> "0", 'false', " ", {}, [], function(){}

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptyObj = {name: "Monu"}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Empty Object");
} else {
    // console.log("Not Empty")
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

// console.log(val1);

// Ternary Operator => condition ? true : false

const iceTeaPrice = 70;
iceTeaPrice <= 80 ? console.log("less tha 80") : console.log("greater than 80");
