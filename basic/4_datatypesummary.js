//*-----------------------------PREMITIVE DATATYPE---------------------------------------------//
// THESE DATATYPE WORKS ON BASIS OF PASS BY VALUE 
// i.e A copy is passed of original value => Changes in value of copy doesnt affect value of original
//? There are 7 premitive datatypes : String , Number , Boolean , Null , Undefined , Symbol , BigInt :

let string = "me"
let number = 21
let boolean = true
let nul = null
let undefined;
let sym = Symbol("121") //symbol makes any value unique even if 2 symbols are assigned same name they arent equal at all 
let bigInt = 212121212129281928291829n //n used in last makes it big int | used for scientific and big values

//?EXAMPLE OF PREMITIVE:
let points  = 300 
let score = points //both have now same values | score is copy of points
score = 400 //score's value is changed but it doesnt change value of points

//*----------------------------REFERENCE DATATYPE------------------------------------------------//
// THESE DATATYPE WORKS ON BASIS OF PASS BY REFERENCE 
// i.e A refrence(link/path to the original value) is passed => Changes in value of reference affects value of original 
//? There are 3 reference datatypes : Array , Objects , Functions 

let array = ["mimi","kallo","smokey"] // ARRAY
let object= {
    name : "mridu" // OBJECT
}
let myfunction = function(){
    console.log(2+2);        // FUNCTION
}
myfunction();

//? EXAMPLE OF REFERENCE 
let obj = {
    size : 42
}
let objt = obj //call by reference
objt.size = 45 //objt holds path of obj |changing objt changes value of obj shown below
console.log(obj.size); //45
