// global scope 
let a = 5 // global 
function addone(num){
    let b = 4 //local 
    return a+b;
}
console.log(addone(5));
//console.log(a+b) => b is not defined 
// same in functions , if else , objects
