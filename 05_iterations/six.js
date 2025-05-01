const coding = ["js", "cpp", "ruby", "python", "java"]

const values = coding.forEach( (item) => {
    // console.log(item);
    // return item;
})

// console.log(values);   forEach => don't return any values.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  (num) => num > 4)

const newNums = myNums.filter( (num)  => {
    return num > 4;
})
// console.log(newNums);

const Number = []

myNums.forEach( (num) => {
    if (num > 5) {
        Number.push(num)
    }
})
// console.log(Number);

const books = [
    { title : 'Book1', genre : 'Fiction', publish : 1981, edition : 2004},
    { title : 'Book2', genre : 'Non-Fiction', publish : 1992, edition : 2008},
    { title : 'Book3', genre : 'History', publish : 1999, edition : 2007},
    { title : 'Book4', genre : 'Non-Fiction', publish : 1989, edition : 2010},
    { title : 'Book5', genre : 'Science', publish : 2009, edition : 2014},
    { title : 'Book6', genre : 'Fiction', publish : 1987, edition : 2010},
    { title : 'Book7', genre : 'History', publish : 1986, edition : 1996},
    { title : 'Book8', genre : 'Science', publish : 2011, edition : 2016},
    { title : 'Book8', genre : 'Non-Fiction', publish : 1981, edition : 1989},
];

const userBooks = books.filter( (bk) => bk.genre === 'History')


const userBook1 = books.filter( (bk1) => bk1.publish >= 1995 && bk1.genre === 'History');

console.log(userBooks);
console.log(userBook1);