// lecture
// Rest operator: ...
// function f (a, b, ...c) {
//     //
// }

// // ex1) 
// function printNums(num1, num2) {
//     console.log(num1, num2)
// }

// printNums(1,2,3,4,5)

// // Expected
// // 1 2

// // ex2)
// function printNums(num1, num2) {
//     console.log(arguments)
// }

// printNums(1,2,3,4,5)

// // Expected
// // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]   : all arguments in 'arguments'

// // ex3)
// function printNums(...num1, num2) {
//     console.log(num1, num2)
// }

// printNums(1,2,3,4,5)

// // Expected
// // SyntaxError: Rest parameter must be last formal parameter

// ex4)
function printNums(num1, ...num2) {
    console.log(num1, num2)
}

printNums(1,2,3,4,5)

// Expected
// 1 (4) [2, 3, 4, 5]   : number 1 in variable 'num1' and others in variable 'num2'