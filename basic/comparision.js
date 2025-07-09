//? SAME DATA TYPE :
console.log(2 < 1);  //False  
console.log(2 > 1);  //True 
console.log(2 == 1); //False 
console.log(2 <= 1); //False
console.log(2 >= 1); //True
console.log(2 != 1); //True

console.log("a" < "a");  //False
console.log("a" == "a"); //True

console.log(true > false);  //True
console.log(true == false); //False 



//? DIFFERENT DATA TYPE :
console.log("2" == 2); //True
console.log("a" == 2); //False
console.log( 1 <= "2");//True
console.log("3" >= 2); //True
console.log("3" > 2);  //True 

//? NULL COMPARISION :
//* Relational Comparison [null converts to 0] 
console.log(null > 0);  //False 
console.log(null < 0);  //False
console.log(null >= 0); //True
console.log(null <= 0); //True

//! SPECIAL CASE 
//* Loose Equality Comparision [null doesnt convert to 0] 
console.log(null == 0); //False 
console.log(null != 0); //True 

//? UNDEFINED COMPARISION [doesnt convert to number]
console.log(undefined == 0); //False
console.log(undefined <= 0); //False
console.log(undefined >= 0); //False
console.log(undefined < 0);  //False
console.log(undefined > 0); //False 

console.log(null == undefined); //True
console.log(null > undefined);  //False 

//? Strict Equality Comparision [compares datatype too] :
console.log(null === undefined); //False [different datatype]
console.log(2 === 2); //True [same datatype]
console.log("2" === 2); 
console.log(null === 0);









