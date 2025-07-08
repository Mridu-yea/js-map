/* datatype to  Number conversion */
let age = "33"
//console.log(typeof age);
//console.log(age);

let num = Number(age)
//console.log(typeof num);
//console.log(num);

/*-----------------------------Results----------------------------------- */
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
//console.log(typeof isLoggedIn);

let BisLoggedIn = Boolean(isLoggedIn)
//console.log(BisLoggedIn);
//console.log(typeof BisLoggedIn);

/*-----------------------------Results----------------------------------- */
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

/*-----------------------------Results----------------------------------- */
//---Before conversion----//---After converson-------//
// VALUE ,  TYPE    =>  VALUE , TYPE
// 1     , number   =>  "1"     , string 
// "1"   , string   =>  "1"     , string 
// "abc" , string   =>  "abc"   , string 
// true  , boolean  => "true"   , string 
// false , boolean  => "false"  , string 
// null  , object   => null     , string 
//undef  , undef    => undefined , string








