// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj", "spiderman"];

const myArr1 = new Array(2, 3, 5, 8);
console.log(myArr1[2]);
 
// Array methods

myArr.push(8,3);
myArr.pop();

myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();  //change type object to string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

// slice -> don't change the original array.
// splice -> split the original array.

 