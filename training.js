// const arr = [-4, 3, -9, 0, 4, 1]
// // To get positive negative and 0

// const arrayLength = arr.length;

// const arr1 = arr.map(e => Math.sign(e))
// const postive = arr1.filter((e) => e == 1)
// const negative = arr1.filter((e) => e == -1)
// const zero = arr1.filter((e) => e == 0)
// console.log(postive.length.toFixed(6), negative.length, zero.length)

// console.log((postive.length / arrayLength).toFixed(6))
// console.log((negative.length / arrayLength).toFixed(6))
// console.log((zero.length / arrayLength).toFixed(6))

// const arr2 = arr.reduce((acc, curr) => {
//     let i = Math.sign(curr);
//     if (i == -1) ++acc.negative
//     else if (i == 1) ++acc.positive
//     else ++acc.zero
//     return acc
// }, { positive: 0, negative: 0, zero: 0 })

// console.log(arr2)

// const arr2 = arr.reduce((acc, curr) => {
//     let i = Math.sign(curr);   // Not a good way
//     if (acc[i]) ++acc[i]
//     else acc[i] = 1
//     return acc
// }, {})

// console.log((arr2[1] / arrayLength).toFixed(6))
// console.log((arr2[-1] / arrayLength).toFixed(6))
// console.log((arr2[0] / arrayLength).toFixed(6))

const arr = [1, 2, 3, 4, 5, 6, 10, -1, -3, -1];

// const slice1 = arr.slice(0, 3)
// const slice2 = arr.slice(3, arr.length)
// console.log(arr)

// const f = [...slice2, ...slice1]
// console.log(f)


// const sort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }


// console.log(sort(arr))


// const sortedArray = arr.sort((a, b) => b - a)

// console.log(sortedArray)
// // const maxSum = sortedArray.slice(1)
// //.reduce((acc, curr) => acc + curr, 0)
// const minSum = sortedArray.slice(0, -1)
// // .reduce((acc, curr) => acc + curr, 0)

// console.log(minSum)

// sorting numbers

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let sort = arr.sort((a, b) => console.log(a, b))
// console.log(sort)

// To create a array of numbers

const a = Array.from(Array(10).keys())
a.map((e)=> console.log(e))

// const a = Array.from(Array(10).keys())
// console.log(a) // Array starts from 0

// const b = Array.from(Array(11).keys()).slice(1)
// console.log(b)  // array startrs from 1

// To check if its is divisile or not

// const s = 14 % 3
// console.log(s)


// let a = "a"

// console.log(a.match(/[a-z]/i))

// var func = function func(){
//     console.log(func)
//     console.log(func === func)
// }
// func()

// console.log(Number("1")- 1 == 0)

// console.log((true + false) > 2 + true)

// console.log(false + true)

// Circular array

// let a = [1, 2, 3, 4, 5]
// let d = 4

// let newArr = []

// for (let i = 0; i < a.length; i++) {
//     if (i != d) newArr.push(a[i])
// }

// newArr.unshift(a[d])
// console.log(newArr.join())

// let a = [1, 2, 3, 4]

// let b = a.join()
// console.log(b)

// let c = b.split(',')
// console.log(c)

// let nnn = "sivaraman"
// let splited = nnn.split('')

// splited.map(e => console.log(e))

// Problem == circular array

// let a = [1, 2, 3, 4, 5, 6, 7, 8]
// let d = 4

//Answer 1

// let beforeD = a.slice(0, d)
// let afterD = a.slice(d, a.length)
// console.log([...afterD, ...beforeD])

// Answer 2

// console.log([...a, ...a.slice(0, d)].slice(d))

// Problem

//sorting grid

//let grid = ['ebcdf', 'aghij', 'olkmn', 'trpqs', 'xywuv']

// let a = [2, 3, 1, 11]
// console.log(a.sort((a, b) => a - b)) // sorting numbers



// let sortedArray = grid.map(e => e.split('').sort());
// console.log(sortedArray)
// let answer = "YES";

// for (let i = 0; i < sortedArray.length; i++) {
//     let hr = []
//     for (let j = 0; j < sortedArray.length; j++) {
//         hr.push(sortedArray[j][i])
//     }
//     if (hr.join("") != hr.sort().join("")) answer = "NO"
// }
// console.log(answer)

// PROBLEM perol pump

// const pp = [[1, 5], [10, 3], [3, 4]]

// for (let i = 0; i < pp.length; i++) {

//     let currentPetrol = pp[i][0]
//     let currentPetrolPump = pp[i][1]

//     let nextPetrolPump = pp[i + 1]


// const a = () => {
//     let d = c = 0;

// }
// a()

// // console.log(d, "d")  // d will throw error
// console.log(c, "c") // c will give 0 as ouptut as its stored as global variable
// }

// const ab = () => {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => console.log(i), 3000);

//     }
// }

// ab()

// SEAL

// const obj = { name: "siva" }
// Object.seal(obj)
// console.log(Object.isSealed(obj))
// delete obj.name
// console.log(obj)

// assign

// let o1 = { name: "siva", age: 22 }
// let o2 = { age: 23 }

// // let o3 = {...o1, ...o2}
// // console.log(o3) // { name: 'siva', age: 23 }

// let o3 = Object.assign(o2,o1)
// console.log

// let aa = [1, 2, 3]

// let a = aa.map((e) => e * 2)

// console.log(aa)
// console.log(a)

// let aa = [1, 2, 3]

// let a = aa.filter((e) => e > 1)

// console.log(aa)
// console.log(a)


// Encoding
// utf-8 8bits
















































