// dates 

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);         // Object

let myCreatedDate1 = new Date(2002, 11, 18);
let myCreatedDate2 = new Date(2025, 11, 18, 15, 30);
let myCreatedDate3 = new Date("2024-12-18");

console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toString());
