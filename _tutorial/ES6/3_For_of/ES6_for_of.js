// lecture
// for...of...

// ex1) for in : allowed to get key of object but not to get value of object.
let array = [10,20,30,40]

for (let val in array) {
    // console.log(val)
    console.log(array[val])
} 
// Expected 
// 0 1 2 3
// 10 20 30 40

// ex2) for ... of .. : only available for object contains symbol iterater attribute
let obj = {a: 1, b: 2, c: 3}
// for (let val of obj) {
for (let val in obj) {
    // console.log(val)
    console.log(obj[val])
} 
// Expected
// Uncaught TypeError TypeError: obj is not iterable
// a b c
// 1 2 3


