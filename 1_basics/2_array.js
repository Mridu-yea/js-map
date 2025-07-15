//?-------------------------------------------Adding two arrays---------------------------------------------------------------------------
let arr1 = ["ribbon","bows", "clips"]
let arr2 = [1 , 2 , 8]

arr1.push(arr2)
console.log(arr1); // [ 'ribbon', 'bows', 'clips', [ 1, 2, 8 ] ]

let arr3 = ["ribbon","bows", "clips"]
let arr4 = [1 , 2 , 8]

arr = arr3.concat(arr4)
console.log(arr);  // [ 'ribbon', 'bows', 'clips', 1, 2, 8 ]

let newarray = [...arr3,...arr4] // You can add more arrays in it 
console.log(newarray); // [ 'ribbon', 'bows', 'clips', 1, 2, 8 ]

//?------------------------------------------------More functions---------------------------------------------------------------------------
let array = [1 , 2 , [3 , 4] ,5 , [7 , [8,9,[10]]]]
console.log(array[4][1][2][0]); // 10 

console.log(array.flat(Infinity)); // [1,2,3,4,5,6,7,8,9,10]

console.log(Array.from("meow")); // [ 'm', 'e', 'o', 'w' ]
console.log(Array.from({name : "meow"})); // interesting

let score1 = 100
let score2 = 190
let score3 = 121
console.log(Array.of(score1,score2,score3)); // [ 100, 190, 121 ]



