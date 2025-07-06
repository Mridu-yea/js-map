const accountId = 1445500 /*cant change*/
let accountEmail = "mue@gmail.com" /*can change*/
var accoundtPassword = "12345"/*use let-var creates issue in block scope*/
accountCity = 'Jaipur'/*can use BUT not good to use*/

let accountState;

//---------------------------------------------------------------------//
//accountId = 2 ->> not allowed
accoundtEmail = "mue1@gmail.com"
accountPassword ="1212"
accountCity ='Noida'
//---------------------------------------------------------------------//

console.log(accountId)
console.table([accoundtPassword,accountEmail,accountId,accountCity,accountState])




