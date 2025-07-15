const myArr0 = [1 , "hi" , true , null ,[1,2,3,4]] // we can add any datatype in an array 
const myArr = [1,2,3,4,5]
console.log(myArr[0]); // 1 

//?-------------------------------------------MAIN FUNCTIONS---------------------------------------------------------------
console.log("Main ",myArr); // Main  [ 1, 2, 3, 4, 5 ]

myArr.push(9) // Pushes value in last slot 
console.log("push " , myArr); //push  [ 1, 2, 3, 4, 5, 9 ]

myArr.pop() // Deletes last value
console.log("pop " , myArr ); //pop  [ 1, 2, 3, 4, 5 ]

myArr.unshift(1 , 2 , 2) // adds value in start 
console.log("unshift " , myArr); //unshift  [ 1, 2, 2, 1, 2, 3, 4, 5 ]

myArr.shift() // Deletes first value
console.log("shift ",myArr); // shift  [ 1, 2, 2, 1, 2, 3, 4, 5 ] 

//?-----------------------------------------------SLICE-------------------------------------------------------------------------
let newArr = [1,4,6,7,8]

console.log(newArr.slice(2));    // [ 6, 7, 8 ]
console.log(newArr.slice(2,4));  // [ 6, 7 ]
console.log(newArr.slice(-2));   // [ 7, 8 ]
console.log(newArr.slice(2,-2)); // [ 6 ]

console.log(newArr); //  [1,4,6,7,8] ==> These functions doesnt manipulate the array  

//?----------------------------------------------SPLICE-------------------------------------------------------------------------------
let Arr  = [1,4,6,7,8]
//! These splice functions manipulate the array 
console.log(Arr.splice(2));    // [ 6, 7, 8 ]
console.log(Arr);              // [ 1, 4 ]

console.log(Arr.splice(2,4));  // []

console.log(Arr.splice(-2));   // [ 1, 4 ]
console.log(Arr);              // []

console.log(Arr.splice(2,-2)); // [] 

//?--------------------------------------OTHER FUNCTIONS-----------------------------------------------------------------------
let Array = [1,2,3,4,5,6,6]

console.log(Array.length); //7
console.log(Array.join()); // 1,2,3,4,5,6,6 => converts to string
console.log(Array.includes(2)); // true
console.log(Array.indexOf(5));  // 4









