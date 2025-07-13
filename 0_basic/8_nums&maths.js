//?---------------------------------------------------NUMBERS------------------------------------------------------------------------------//
let score = Number(2200) //The input is always number datatype now.✅ Good way to write 
let point = new Number(2200) // The input is always an object now. Raises issues ⛔ Not reccomended 

console.log(Math.abs(-1499)) // => 1499 | Only converts negative to positive 

console.log(Math.pow(2,4)) // => 16 | (x,y)=> x^y | gives power
console.log(Math.sqrt(4)) // => 2   | Square root
console.log(Math.cbrt(64)) // =>4 | Cube root 
console.log(Math.exp(2)) // =>7.38905609893065    | gives exponential

console.log(Math.trunc(14.33)) // => 14 | removes decimal value
console.log(Math.round(6.6)) // =>7 | Rounds off value
console.log(Math.ceil(0.5)) // => 1 | gives bigger roundoff value
console.log(Math.fround(9.99)) // => 9.989999771118164| gives 32bit single precision level of number

console.log(Math.max(1,23,90)) //=> 90 | Gives max value / works with array too
console.log(Math.min(1,23,90)) //=> 1  | Gives min value / works with array too 

let hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000


let min = 1
let max = 6
let dice = Math.floor((Math.random() * (max - min + 1)) + min)
console.log(dice) // Gives random number from 1-6
//Above , Math.random is used for giving random number 
//here we did max-min = 5 in our case
//it gives output between 0 and 1 thus , we added 1 
//we also want 1 to be min value so we added 1 

//?---------------------------------------MATHS-----------------------------------------------------------------------//
console.log(Math.LN2);  //0.6931471805599453 |Natural log of 2 | same with LN10
console.log(Math.LOG2E);//1.4426950408889634 |Log 2 of e       | Same with LOG10E
console.log(Math.PI);   //3.141592653589793  |Value of pi
console.log(Math.SQRT2);//1.4142135623730951 |Square root of 2 | same with SQRT1_2(sqrt of 0.5)


