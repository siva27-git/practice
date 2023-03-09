//CLOSURES
// function x() {
//     let a = 10
//     let b = 20
//     return function y() {
//         console.log(a, b)
//     }
//     // Here y is returned along with its lexical environment i.e lexical environment of x which is variable a and b
// }

// var z = x()
// z()

// const z = () => {
//     let a = 10
//     const x = () => {
//         let b = 20
//         const y = () => {
//             console.log(a, b)
//         }
//         a = 100
//         b = 200
//         y()
//     }
//     return x
// }
// let zz =z()
// zz()

//Call, Apply, Bind

// Not applicaable for arrow functions

// let myFullName = function (city, method) {
//     console.log(this.firstName + " " + this.lastName + " " + city + " " + method)
// }


// let name1 = { firstName: "sivaraman", lastName: "R" }

// myFullName.call(name1, "chennai", "call")  // sivaraman R chennai call
// myFullName.call("sivaraman", "chennai", "call")  // undefined undefined chennai call
// myFullName.call(this, "chennai", "call")  // undefined undefined chennai call
// myFullName.apply(name1, ["chennai", "apply"])  // sivaraman R chennai apply
// let c = myFullName.bind(name1, "chennai", "bind") // Gives the copy of the function 
// name1.lastName = "RRR"
// c()  // sivaraman RRR chennai bind

// Currying

// function withoutCurrying(a, b) {
//     console.log(a, b)
// }
// withoutCurrying(3, 5) // without currying

// function withCurrying(a) {
//     return function y(b) {
//         console.log(a, b)
//     }
// }
// withCurrying(3)(5)  // with currying

// const withoutCurrying = (a, b) => {
//     console.log(a * b) 
// }
// withoutCurrying(3, 3) // 9

// const withCurrying = (a) => {
//     return y = (b) => {
//         console.log(a * b)
//     }
// }
// withCurrying(5)(5)  // 25

//setTimeout + closures

// const x = () => {
//     for (var a = 1; a <= 5; a++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, a * 1000)
//         }
//         close(a)
//     }
// }
// x() // 0 1 2 3 4 5

// const x = () => {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }
// x()  // 0 1 2 3 4 5

//Closure Example for data hiding

// const counter = () => {
//     let count = 0
//     return incrementCounter = () => {
//         count++
//         console.log(count)
//     }
// }

// let counter1 = counter()

// counter1()
// counter1()
// counter1()

//Function Statement and Declaration

// function x() {
//     console.log("Normal function")
// }

// x = () => {
//     console.log("Arrow function")
// }
// x()

//Function Expression

// var x = function () {
//     console.log("Normal x")
// }

// const x = () => {
//     console.log("Arrow x")
// }
// x()

//Anonymous function  -- Functions assigned as values known as anonymus function

// var x = function () {
//     console.log("Normal x")
// }

// const x = () => {
//     console.log("Arrow x")
// }
// x()

//Named Function Expression

// var x = function xyx() {
//     console.log("Normal x")
// }
// x()  // output Normal x
// xyz() // throws error xyz is not defined

// const x = xyz = () => {
//     console.log("Arrow x")
// }

// x() // output Arrow x 
// xyz() // output Arrow x 

// First Class Function

// const x = (y) => {
//     console.log(y) // y function logs
//     y() // Iam y
// }

// const y = () => {
//     console.log("Iam Y")
// }

// x(y)

// const x = () => {
//     return y = () => {
//         console.log("Iam Y")
//     }
// }

// const z = x()
// console.log(z) // complete y function logs
// z()  // Iam Y

// Call Back Functions

// setTimeout(() => {
//     console.log("timer") // Simple example for call back
// }, 5000);

// document.getElementById("clickMe").addEventListener("click", () => {
//     console.log("clicked", count++)
// })

// setTimeout issues Bloking main thread

// console.log("start");

// setTimeout(() => {
//     console.log("timer")
// }, 5000);

// console.log("end");

// let currentTime = new Date().getTime()
// console.log(currentTime)
// let endTime = currentTime

// while (endTime < currentTime + 10000) {
//     endTime = new Date().getTime()
//     console.log(endTime)
// }

// console.log("while Ends")

// console.log("start")

// setTimeout(() => {
//     console.log("Timer")
// },0);

// console.log("End")

// Examples of writing code

// const radius = [3, 9, 6]

// const area = (radius) => {
//     return radius * radius
// }

// const circumference = (radius) => {
//     return 2 * Math.PI * radius
// }

// const areas = radius.map((e) => area(e))
// const cir = radius.map(circumference)

// console.log(areas)


// MAP, FILTER, REDUCE

// MAP used to transform an array

// const arr = [1, 2, 3, 4, 5]

// const double = (x) => {
//     return x * x
// }
// const output = arr.map(double)
// console.log(output) // [1, 4, 9, 16, 25]

// const doubele1 = (x) => x * x
// const output = arr.map(doubele1)
// console.log(output) // [1, 4, 9, 16, 25]

// const output = arr.map((x) => x * x)
// console.log(output) // [1, 4, 9, 16, 25]

// const output = arr.map((x) => {x * x})
// console.log(output) // [undefined, undefined,...]

// const output = arr.map((x) => { return x * x })
// console.log(output) // [1, 4, 9, 16, 25]

//FILTER

// filter is used to filter out the values from an array

// const arr = [1, 2, 3, 4, 5]

// // const output = arr.filter((x) => x % 2) // To get only odd numbers 
// // console.log(output)//[1, 3, 5]

// const isEven = (x) => {
//     return x % 2 == 0  // To get even values
// }

// const output = arr.filter(isEven)
// console.log(output) // [2, 4]

//REDUCE

// Reduce is used to take all the element of the array and to make a single value
// Reduce will take two arguments, one is function and another is the initial value.

// By using reduce exampe for summ
//acc = accumulator 
// curr = current value
// 100 = initial value of the accumulator

// const output = arr.reduce((acc, curr) => acc + curr, 100)
// console.log(output) // 121

// Example to find the max value

// Traditional way

// const arr = [1, 8, 3, 4, 5]

// const findMax = (arr) => {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr)) // 8

// const output = arr.reduce((max, current) => {
//     if (current > max) max = current
//     return max
// }, 0)

// console.log(output) // 8

// const arr = [
//     { fn: "a", ln: "aa", age: 10 },
//     { fn: "b", ln: "bb", age: 20 },
//     { fn: "c", ln: "cc", age: 12 }
// ]

// To get full names of all

// const output = arr.map((e) => e.fn + " " + e.ln)
// console.log(output) // ['a aa', 'b bb', 'c cc']

// To get age wise count using reduce

// const output = arr.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = acc[curr.age] + 1
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {})

// console.log(output) // {10: 2, 20: 1}

// To get only the first name of the people above 9

// const output = arr.filter(x => x.age > 10).map(x => x.fn)
// console.log(output) // ['b', 'c']

// same using reduce

// const output = arr.reduce((acc, curr) => {
//     if (curr.age > 10) acc.push(curr.fn)
//     return acc
// }, [])

// console.log(output) // [b, c]

// const fs = require("fs")
// fs.writeFileSync("hello.txt", "hello")





































