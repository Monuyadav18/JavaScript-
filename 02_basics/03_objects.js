// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "monu yadav",
    [mySym] : "mykey1",
    age : 22,
    location : "Noida",
    email : "monu@google.com",
    isLoggedIn : "false",
    lastLoginDays : ["mon", "wed", "fri"]
}
console.log(JsUser.name);
console.log(JsUser["email"]);
console.log( JsUser[mySym]);

JsUser.email = "monuyadav@google.com";
// Object.freeze(JsUser);
JsUser.email = "abc@yahoo.com";

console.log(JsUser);

JsUser.gretting = function(){
    console.log("Hello JS user");
}
JsUser.gretting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.gretting());
console.log(JsUser.gretting2());
