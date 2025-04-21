// Singleton

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "1234";
tinderUser.name = "monu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "saome@gmail.com",
    fullname : {
        userfullname : {
            firstname : "monu",
            lastname :  "yadav"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2, ...obj4}; // spread
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor;

const {courseInstructor: instructor} = course; //de-structure
// console.log(courseInstructor);

console.log(instructor);
