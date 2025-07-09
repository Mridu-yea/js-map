// ********************************CONVERSION***************************//
/* datatype to  Number conversion */
let age = "33"
console.log(typeof age);
console.log(age);

let num = Number(age)
console.log(typeof num);
console.log(num);

//?-----------------------------Results----------------------------------- */
//---Before conversion----//---After converson-------//
// VALUE ,  TYPE    =>  VALUE , TYPE
//   33  , number   =>    33  , number
//  "33" , string   =>    33  , number 
// "abc" , string   =>    NaN , number [NaN = Not A Number]
// true  , boolean  =>    1   , number 
// false , boolean  =>    0   , number 
//  null , object   =>    0   , number
//undefined,undefined =>  NaN , number 

/* datatype to  Boolean conversion */
let isLoggedIn = 0
console.log(typeof isLoggedIn);

let BisLoggedIn = Boolean(isLoggedIn)
console.log(BisLoggedIn);
console.log(typeof BisLoggedIn);

//?-----------------------------Results----------------------------------- */
//---Before conversion----//---After converson-------//
// VALUE ,  TYPE    =>  VALUE , TYPE
//  0    , number   =>  false , boolean
//  1    , number   =>  true  , boolean
// ""    , string   =>  false , boolean 
// "abc" , string   =>  true  , boolean 
// null  , object   =>  false , boolean 
// undef , undef    =>  false , boolean 

/* datatype to  String conversion */
let peak = undefined
console.log(typeof peak);

let speak = String(peak)
console.log(speak);
console.log(typeof speak);

//?-----------------------------Results----------------------------------- */
//---Before conversion----//---After converson-------//
// VALUE ,  TYPE    =>  VALUE , TYPE
// 1     , number   =>  "1"     , string 
// "1"   , string   =>  "1"     , string 
// "abc" , string   =>  "abc"   , string 
// true  , boolean  => "true"   , string 
// false , boolean  => "false"  , string 
// null  , object   => null     , string 
//undef  , undef    => undefined , string

//? ************************************** OPERATIONS *******************************//

let num1 = 2+2  
let num2 = 2-2 
let num3 = 2*2 
let num4 = 2**2 //POWER OPERATOR
let num5 = 2/2 
let num6 = 2%2 //REMAINDER OPERATOR

let num7 = 1+2 
let num8 = "1"+2    //↴↴↴
let num9 = 1+"2"    //STRING + NUMBER/STRING = STRING 
let num10 = "1"+"2" //↥↥↥
let num11 = 1+2+"2" //STRING LAST = NUMBERS ADDITION THEN STRING
let num12 = "1" +2+2 //STRING FIRST = RESULT IN STRING
let num13 = 1+"2"+3
let num14 = 2+3/5*4%10        //! DONT WRITE WITHOUT BRACKETS
let num15 = (((2+3)/5)*4)%10 //*MUST WAY TO WRITE

//console.table([num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15]);

 //?---------------------------------RESULT------------------------------------//
 /*
*┌─────────┬────────┐
*│ (index) │ Values │
*├─────────┼────────┤
*│ 0       │ 4      │ 
*│ 1       │ 0      │
*│ 2       │ 4      │
*│ 3       │ 4      │
*│ 4       │ 1      │
*│ 5       │ 0      │
*│ 6       │ 3      │
*│ 7       │ '12'   │
*│ 8       │ '12'   │
*│ 9       │ '12'   │
*│ 10      │ '32'   │
*│ 11      │ '122'  │
*│ 12      │ '123'  │
*│ 13      │ 4.4    │
*│ 14      │ 4      │
*└─────────┴────────┘ */

//?--------------------------------EXTRA OPERATIONS-------------------------------------------------------------------------//
let x = 1
const y = ++x     // x=2
console.log(x,y); // (2,2)
//? ++x = pre increment operator

let a = 1
const b = a++  // x before ++ => b = a = 1 | a++ => a+1=2
console.log(a,b); // (2,1)
//? x++ = post increment operator 

let c = 2
const d = --c     // c = 1
console.log(c,d); // (1,1)
//? --x = pre decrement operator 

let e = 2
const f = e-- // e before -- => f=e=2 | e-- => e-1=1
console.log(e,f); //(1,2)
//? x-- = post decrement operator 



let p = 1
let negx = -p
console.log(negx);  // => -1

console.log(+true); // => 1















