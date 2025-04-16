const marvel_heroes = ["thor", "ironman", "superman"];
const dc_heroes = ["spiderman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const all = [...marvel_heroes, ...dc_heroes]; // spreadout method
console.log(all);


const another_array = [1, 2, 3, [4, 5, 6], [6, 7, 8], 5, [6, 4, 3]];

const realAnotherArray = another_array.flat(Infinity);

console.log(realAnotherArray);

console.log(Array.isArray("Monu"));
console.log(Array.from("Monu"));
console.log(Array.from({name: "Monu"})); // interested

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
