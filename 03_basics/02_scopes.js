// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner a =", a);
}

// console.log("Outer a =",a)

function one (){
    const username = "Monu";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true) {
    const username = "Monu";
    if(username === "Monu"){
        const website = "youtube";
        console.log(username + website);
}
// console.log(website);
}

// console.log(username);

//***********  interesting   ***************

console.log(addone(6));

function addone(num){
    return num + 1;
}

// addTwo(5); can't access before initialization
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));