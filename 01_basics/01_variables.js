const accountId = 144523;
let accountEmail = "monu@google.com";
var accountPassword = "12344";
accountCity = "Noida";
let accountState;

// accountId = 22232 -> Not allowed

accountEmail = "monu@hcl.com";
accountPassword = "763528";
accountCity = "Ballia";

console.log(accountId);

/*
    Prefer not use var
    Because of issues in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);