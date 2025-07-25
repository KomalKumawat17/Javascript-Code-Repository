/*
Variables that reserved the memory.
Let,Var, Const

Not to prefer use Var
Bcz of issue block scope and functional scope.
*/

const accountId = 12345678;
let accountEmail = "test@gmail.com";
var accountPassword = "TestPass";
accountCity = "Jaipur";
let accountState;

console.log('AccountId :: ',accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

//accountId = 1234; we cannot update the Const Variable
accountEmail = 12356566;
accountPassword = 23456;
accountCity = 123455;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

