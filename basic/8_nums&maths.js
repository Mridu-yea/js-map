//?---------------------------------------------------NUMBERS------------------------------------------------------------------------------//
let score = Number(2200) //The input is always number datatype now.✅ Good way to write 
let point = new Number(2200) // The input is always an object now. Raises issues ⛔ Not reccomended 

console.log(Math.abs(-1499)) // => 1499 | Only converts negative to positive 

console.log(Math.pow(2,4)) // => 16 | (x,y)=> x^y | gives power
console.log(Math.cbrt(64)) // =>4 | Cube root 
console.log(Math.exp(2)) // =>7.38905609893065    | gives exponential

console.log(Math.ceil(0.5)) // => 1 | gives bigger roundoff value
console.log(Math.fround(9.99)) // => 9.989999771118164| gives 32bit single precision level of number

console.log(Math.max(1,23,90)) //=> 90 | Gives max value / works with array too
console.log(Math.min(1,23,90)) //=> 1  | Gives min value / works with array too 


