const accountId = 212121 /*cant change*/
let accountEmail = "mue@gmail.com" /*can change*/
var accountPassword = "12345"/*use let-var creates issue in block scope*/
accountCity = 'Jaipur'/*can use BUT not good to use*/

let accountState;

//---------------------------------------------------------------------//
//accountId = 2 ->> not allowed
accountEmail = "mue1@gmail.com"
accountPassword ="1212"
accountCity ='Noida'
//---------------------------------------------------------------------//

console.log(accountId)
console.table([accountPassword,accountEmail,accountId,accountCity,accountState])




