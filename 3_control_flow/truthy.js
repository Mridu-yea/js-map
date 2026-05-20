// TRUTHY VALUE => ASSUMED THAT THE VALUE IS TRUE 

const user_id = "0211"; // true value
const user_key = ""; // false 
const user_list = []; //true

if (user_id && user_key && user_list){
    console.log("Id registered successfully.");
    
}else{
    console.log("Please try again later."); // true 
}

// FALSY VALUE => Null , Undefiend , "" , NaN , 0 , -0 , BigInt.
// TRUTHY VALUE => "0", [] , "false", " " , {} , function(){}.

const emptyArr = [];
const emptyObj = {};
if (emptyArr.length == 0){
    console.log("empty array");
    
}
if ((Object.keys(emptyObj)).length == 0){
    console.log("empty object");
    
}