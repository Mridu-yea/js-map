name = "mimi"
points = 102
console.log(`Points of ${name} are ${points}.`); //* ✔ Correct way to write a string
//"Points of mimi are 102."


//?---------------------------Length & Indexing---------------------------------------------//
let line = "I have two 🐈cats"

console.log(line.length); //17
console.log(line.at(-2)); //"t"
console.log(line.charAt(-2)); //" " => only works on positive index 
console.log(line.charCodeAt(2)); //104 => Gives unicode | only works on positive index
console.log(line.codePointAt(12));  //56328 => Unicode of symbols , emojis 

//?-------------------------------Searching------------------------------------------------------------//
let cat = "i love meowfy and we love meowy"

console.log(cat.indexOf("love")); // 2 | only finds string
console.log(cat.search(/\s/)); // 1 | finds space and digits
console.log(cat.lastIndexOf("love")); //21
console.log(cat.includes("we")); // true
console.log(cat.startsWith("i")); // true
console.log(cat.endsWith("y")); // true
console.log(cat.endsWith("meowfy")); // false 

//?-------------------------------Extracting & Slicing-----------------------------------------------//
let quote = "Meow meow purr purr hiss-tory proves, nap time with hooman = best time. 🐾"

console.log(quote.slice(0 ,20));//Meow meow purr purr 
console.log(quote.slice(-13 , -1)); //best time. 🐾
console.log(quote.substring(0 , 37)); //Meow meow purr purr hiss-tory proves,

//?-----------------------------Modifying & Replacing-------------------------------------------------//
let say = "I did good job today cause I helped people."

console.log(say.replace("good" , "great")); //I did great job today cause I helped people.
console.log(say.replaceAll("I" , "we")); //we did good job today cause we helped people.
console.log(say.toUpperCase()); //I DID GOOD JOB TODAY CAUSE I HELPED PEOPLE.
console.log(say.toLowerCase()); // i did good job today cause i helped peeple.
console.log(say.concat(" and I loved it"));// I did good job today cause I helped people. and I loved it

let cats = "meow " 
console.log(cats.repeat(3)); // meow meow meow

//?----------------------------Trimming & Padding-------------------------------------------------------//
let email = " kimpeak.2149@gmail.com  "
console.log(email.trimStart("")); // "kimpeak.2149@gmail.com  "
console.log(email.trimEnd(""));   //" kimpeak.2149@gmail.com"
console.log(email.trim(""));      //"kimpeak.2149@gmail.com"

let number = "330028371937"
last4digits = number.slice(-4)
console.log(last4digits.padStart(number.length,"*")); //********1937

let n = "wiwiwiwiiwiwi"
let fakey = "fake"
console.log(fakey.padEnd(n.length,"*"));// fake*********

//?------------------------------Splitting & Joining-------------------------------------------------------//
let likes = "car,dancing,music,baking,cakes,coding"
console.log(likes.split(",")); //[ 'car', 'dancing', 'music', 'baking', 'cakes', 'coding' ]

//!                    JOIN IS REVERSE OF SPLIT                               

let likesArray = [ 'car', 'dancing', 'music', 'baking', 'cakes', 'coding' ]
console.log(likesArray.join(",")); //car,dancing,music,baking,cakes,coding

//?-----------------------------Matching & Comparing------------------------------------------------------//
//1)[a-z]=>lower case letters
//2)[A-Z]=>Upper case letters
//3) + => one more 
//4) g => every element
//5) /d => digits


let id = "User123"

console.log(id.match(/[a-z]/));//[ 's', index: 1, input: 'User123', groups: undefined ]
console.log(id.match(/[a-z]+/));//[ 'ser', index: 1, input: 'User123', groups: undefined ]
console.log(id.match(/[a-z]/g));//[ 's', 'e', 'r' ]

console.log(id.match(/[A-Z]/g));//[ 'U' ]
console.log(id.match(/\d/));//[ '1', index: 4, input: 'User123', groups: undefined ]
console.log(id.match(/\d+/));//[ '123', index: 4, input: 'User123', groups: undefined ]
console.log(id.match(/\d/g));//[ '1', '2', '3' ]

//localeCompare compares two or more variable's value and check which comes first in ascii system or dictionary
let a = "apple"
let b = "zebra"

console.log(a.localeCompare(b)); //-1 => a comes before b
console.log(b.localeCompare(a)); // 1 => b comes after a 

let kitty = "cat"
let kitty1= "CAT"

console.log(kitty.localeCompare(kitty1,"en",{sensitivity : "base"})); // 0 => bith words hold same position 
//! In above example , we used "en"(english locale) and sensitivity which makes upper and lower case words to be same 
//! Thats why cat and CAT gave 0 result meaning they are same . Its a perticular case we made but cat and CAT dont hold same value in general

console.log(kitty.localeCompare(kitty)); // 0

//?----------------------------------------OTHER--------------------------------------------------------------//
let x = "é";        // Single Unicode character (U+00E9)
let y = "e\u0301";  // "e" + combining accent (U+0301)

console.log(x === y);                         // false ❌ (they *look* the same)
console.log(x.normalize() === y.normalize()); // true ✅











































