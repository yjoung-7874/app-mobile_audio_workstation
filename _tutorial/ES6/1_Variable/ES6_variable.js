// lecture
// var let const

// 1. var

// ex1)
// var hello = 'world' // function level scope

// function test() {
//     var hello = 'korea'
//     console.log(hello)
// }

// test()

// console.log(hello)

// Expected 
// korea
// world

// // ex2)
// var hello = 'world' // global

// if(true) {
//     var hello = 'korea' // local
//     console.log(hello)
// }

// console.log(hello)

// // Expected (not resonable)
// // korea
// // korea
// // : no difference between global and local

// // ex3)
// var hello = 'world' 
// var hello = 'korea'

// console.log(hello)

// // Expected 
// // korea : not resonable
// // : same variable name but no error

// 2. let

// // ex4)
// let hello = 'world' 
// let hello = 'korea'

// console.log(hello)

// // Expected 
// // SyntaxError: Identifier 'hello' has already been declared : resonable

// // ex5)
// let hello = 'world' 

// if(true) {
//     let hello = 'korea' // local
//     console.log(hello)
// }

// console.log(hello)

// // Expected 
// // korea
// // world : resonable
// // Using 'let' is much more reasonable than using 'var'

// 3. const
// ex6)
const num = 5;

num = 6

console.log(num)

// Expected
// TypeError: Assignment to constant variable : reasonable

// // ex7)
// const hello = 'world'

// if(true) {
//     const hello = 'korea'
//     console.log(hello)
// }

// console.log(hello)

// // Expected
// // korea
// // world

// // ex8)
// // object
// const drinks = {};
// drinks.caffe = 'latte'
// drinks.lemon = 'ade'

// console.log(drinks)

// // Expected
// // {caffe: 'latte', lemon: 'ade'} : const element added

// // array
// const array = [1,2,3,4,5]
// array[0] = 100;
// array[4] = 500
// console.log(array)

// // Expected
// // (5) [100, 2, 3, 4, 500] : const element modified