const name = "monu";
const repoCount = 30;

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('coder-monu-yadav');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-9, 3);
console.log(anotherString);


const newString1 = "    Monu    ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://monu.com/monu%20yadav";

console.log(url.replace('%20', '-'));

console.log(url.includes('monu'));
console.log(url.includes('coders'));

console.log(gameName.split('-'));