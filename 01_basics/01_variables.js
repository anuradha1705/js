const accountId =   1212
let accountEmail =  "anuradha@gmail.com"
var accountPassword  =  "123123"
accountCity   =   "jaipur"
let accountState;

//accountId i'll never change values on second time in const keyword(because the keyword (const)didn't to change again the values)
//change values
accountEmail="anuradhak@gmail.com"
accountPassword="1231223"
accountCity="bangluru"

//console.log it is use to print the one value
console.log(accountId);

//the[table] keyword  is use to all entries print the values together 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not to use (var)keyword
because of issue in block scope and functional scope 
*/


/*          .........................const keyword..................................
- variable defined with const can not be redeclared
- variable defined with const can not be reassigned
- variable defined with const have block scope

cannot be reassigned
example-

const accountId=1234;         It is correct.
accountId = 123;              This will give an error, because  cannot be redeclared value.
accountId = accountId + 12;   this is also give an error,because  cannot be redeclared value.

must be assigned
javascript const variable must be assigned a value when they are declared:

correct=
const accountId = 1234;

Incorrect=
const accountId;
accountId = 1234;
*/


/*  .............................let keyword................................

- Variables declared with let have Block Scope
- Variables declared with let must be Declared before use
- Variables declared with let cannot be Redeclared in the same scope


With let and const, you can reassign a variable to a new value, 
but you cannot redeclare a variable within the same scope.


*/