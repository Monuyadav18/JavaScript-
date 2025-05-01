const coding = ["js", "cpp", "ruby", "python", "java"]

//for each

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languagefile : "js"
    },
    {
        languageName : "java",
        languagefile : "java"
    },
    {
        languageName : "python",
        languagefile : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languagefile} = ${item.languageName}`);
})