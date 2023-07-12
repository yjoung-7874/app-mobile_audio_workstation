// lecture
// Spread operator

function sum (x, y, z) {
    return x + y + z
}
let arr = [10,20,30]

// // ex1)
// console.log(sum(1,2,3))
// // Expected
// // 6

// // ex2) elements in array cannot be used as an argument of function
// console.log(sum(arr))
// // Expected
// // 10,20,30undefinedundefined : wrong 

// // ex3) use 'apply' method for using element in array as an argument of function
// console.log(sum.apply(null, arr))
// // Expected
// // 60

// ex4) use 'spread operator' for using element in array as an argument of function
// console.log(sum(...arr))
// // Expected
// // 60

// // ex5) apart from 'rest operator', 'spread operator' can be placed between arguments of function
// function sum (a,b,c,d,e) {
//     return a+b+c+d+e
// }
// console.log(sum(10, ...arr, 40, 50))
// // Expected
// // 110

// // ex6) 
// let face = ['eyes', 'nose', 'mouth']
// let head = ['head', ...face, 'ears']

// console.log(head)
// // Expected
// // (5) ['head', 'eyes', 'nose', 'mouth', 'ears']

let arr_ = [1, 2, 3]
// // ex7) using 'spread operator' won't change original object
// let arrCpy = [...arr_]
// arrCpy.push(4)
// console.log(arr_)
// console.log(arrCpy)
// // Expected
// // (3) [1, 2, 3]
// // (4) [1, 2, 3, 4]

// // ex8) original object can be changed if it just copied.
// let arrCpy_ = arr_
// arrCpy_.push(4)
// console.log(arr_)
// console.log(arrCpy_)
// // Expected
// // (4) [1, 2, 3, 4] : might cause critical bug
// // (4) [1, 2, 3, 4]

// // ex9)
// let drinks = {
//     caffe: 'latte',
//     coca: 'cola'
// }
// let newDrinks = {
//     lemon: 'tea',
//     orange: 'juice',
//     drinks
// }
// let newDrinks_ = {
//     lemon: 'tea',
//     orange: 'juice',
//     ...drinks
// }
// console.log(newDrinks)
// console.log(newDrinks_)

// // Expected
// // {lemon: 'tea', orange: 'juice', drinks: {…}}                    : contains 'drinks' object
// // {lemon: 'tea', orange: 'juice', caffe: 'latte', coca: 'cola'}   : contains key-value of 'drinks' object as an elements  
