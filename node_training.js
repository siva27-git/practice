// let a = [3, 2, 1, 11]
// let b = [3, 4, 5]
// console.log([...a, ...b].sort((a, b) => b - a))


// let c = new Set([...a, ...b].sort((a, b) => a - b))
// console.log(c)


// let a = [1, 13, 14, 11, 2, 3, 11]
// console.log(new Set (a.sort((a, b) => a - b).reverse()))


// let arr = [1, 1]
// let arr2 = [1, 2]

// let sorted = [...arr, ...arr2].sort((a, b) => a - b)
// console.log(sorted)

// let arrLen = sorted.length
// console.log(sorted)
// console.log(arrLen)

// if (arrLen % 2 == 0) {
//     console.log("if")
//     let mid = arrLen / 2
//     let sum = (sorted[mid] + sorted[mid - 1]) / 2
//     console.log(sum)
//     return sum
// } else {
//     let idx = ((arrLen - 1) / 2)
//     console.log(sorted[idx])
//     return sorted[idx]
// }

// palindrome is same as backwords
//simple palindrome

// let str = 'madam'
// let reversedValues = str.split('').reverse().join('')
// if (str == reversedValues) console.log("YES")
// else console.log("NO")

// let str = ["S", "I", "V", "A"]

// console.log(str.join('').split('')) // SIVA
// console.log(str.toString().split()) // S,I,V,A



// CALL , APPLY, BIND
// Used to access this keyword inside the function

// function myFunction(city, state) {
//     console.log(`Name: ${this.name}, city : ${city}, state: ${state}`)
// }

// let myFunction = (city, state) => {  // DOnt use
//     console.log(`Name: ${this.name}, city : ${city}, state: ${state}`)
// } ==> Not applicable in arrow functions

// let pname = { name: "siva" }
// myFunction.call(pname, "chennai", "tamilNadu")// Name: siva, city : chennai, state: tamilNadu
// myFunction.apply(pname, ["chennai", "tamilNadu"]) // Name: siva, city : chennai, state: tamilNadu
// let binded = myFunction.bind(pname, "chennai", "tamilNadu")
// binded() // Name: siva, city : chennai, state: tamilNadu


// closure
// const a = () => {
//     let ab = 10
//     return () => {
//         console.log(ab)
//     }
// }

// let b = a()

// b()


// currying  ==> used to transaform the function

// const wc = (a, b) => {
//     console.log(a + b)
// }

// wc(1, 2)

// const woc = (a) =>{
//     const woc1 = (b) =>{
//         console.log( a+ b)
//     }
//     return woc1
// }
// woc(1)(2)

// First calss functions
// the ability to pass function as a argument 
// a function eturns a function
// function can be used as value 
// all the above known as first class functions

// const x = () =>{
//     console.log("X function")
// }

// const y = (x) =>{
//     x()
// }

// y(x) // Here x is function tat is passed as argument to y function.

// MAP, FLTER, REDUCE

// let arr = [1, 2, 3]

// To map through each elements

// let mapArr = arr.map(e => e * 2)
// console.log(mapArr) // [2,4,6]

// // To filter out elements

// let filtArr = arr.filter(e => e <= 2)
// console.log(filtArr) // [1,2]

// // To reduce the array into single element

// let redArr = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(redArr) // 6


// To find Max value

// simple way

// let m = [0, 100, 2, 3, -1, -3]

// console.log(Math.max(...m))
// console.log(Math.min(...m))

// // usig reduce to find max

// let m = [1, 122, 133, 155, 10000]

// let red = m.reduce((acc, curr) => {
//     if (curr > acc) acc = curr
//     return acc
// }, 0)

// console.log(red)

// using reduce to find min

// let m = [-1, -2, -5, 100, 0]

// let min = m.reduce((acc, curr) => {
//     if (curr < acc) acc = curr
//     return acc
// }, 0)

// console.log(min)


// callbacks

// simple example

// console.log("started")

// setTimeout(() => {
//     console.log("Called")
// }, 1000);

// console.log("ended")

// const fs = require('fs')
// const s = fs.readFileSync('siva.txt')  // read file sync is a synchronous so it will wait
// console.log(s.toString())
// console.log("completed")

// start, hello, end

// const fs = require('fs')

// console.log("START")

// const s = fs.readFile('siva.txt', (err, data) => {
//     if (err) console.log(err)
//     console.log(data.toString())
// })
// console.log("END")

// in the above example the arrow function is passed as call back
// start, end ,hello world

// console.log("start")

// const cb = (a, b, callback) => {
//     setTimeout(() => {
//         let sum = a + b
//         callback(sum)
//     }, 2000);
// }

// const cbf = (sum) => console.log(sum);

// cb(1, 2, cbf)

// console.log("END")

// const axios = require('axios')

// // axios itself promise based

// console.log("started")

// const receiver = (data) => {
//     console.log(data)
// }

// const getFacts = (receiver) => {
//     axios.get('https://catfact.ninja/fact')
//         .then((data) => receiver(data.data.fact))
//         .catch()

// }

// getFacts(receiver)
// console.log("ENDED")

// simple examples for callback, prmise, async await

// callback

// const summer = (a, b, cbf) => {
//     setTimeout(() => {
//         let sum = a + b
//         cbf(sum)
//     }, 2000);
// }

// const cbf = (sum) => {
//     console.log(sum)
// }

// summer(5, 5, cbf)

//Promise

// const summer = (a, b) => {


// }

// MAP vs for each 
// Map will transform the arry
// forEach will loop throught the array

// const a = [1, 2, 3]
// const b = a.map((e) => e * 2)
// const c = a.forEach((e) => e * 2)

//console.log(b) // [2,4,6]
// console.log(c) // undefined
// console.log(a)

// const d = a.forEach((e) => console.log(e))

// FIND VS FILTER VS FIND INDEX

// find will always gives the first finded one

// let a = [1, 2, 2, 2, 3]

// let b = a.filter(e => e == 2)
// console.log(b)  // [2,2,2]

// let c = a.find(e => e == 2)
// console.log(c) // 2

// let d = a.findIndex(e => e == "1")
// console.log(d) // 0
// let d = a.findIndex(e => e == 1)
// console.log(d) // 0

// let d = a.findIndex(e => e == 5)
// console.log(d) // -1

// let arr = new Array(10) // will give empty arry of 10 elements
// console.log(arr.length) // 10
// console.log(arr) // [ <10 empty items> ]

// let arr = Array.from(Array(10).keys())
// console.log(arr.length) // 10
// console.log(arr) // [ 0,1,2,3,4,5,6,7,8,90 ]

// ARRAY

// let arr = [1, 2, 3, 4, 5, 6]
// let arr1 = [7, 8, 9]

// AT

// let at = arr.at(2)
// console.log(at) // 3

// let at = arr.at(-1)
// console.log(at) // 6 gives last element

// concat

// let con = arr.concat(arr1)
// console.log(con) // [1, 2, 3, 4, 5,6, 7, 8, 9]

// let con = arr.concat(arr)
// console.log(con) // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

// let con = arr.concat(arr1[0])
// console.log(con) // [1, 2, 3, 4, 5, 6, 7]

// let con = arr.concat(7, 8, 9, 10)
// console.log(con) // [1, 2, 3, 4,  5,6, 7, 8, 9, 10]

//every == gives a boolean value

// let arr = [2, 4, 6]
// // const even = arr.every((e) => e > 0)
// // console.log(even)

// const even = arr.every((e) => e % 2 == 0)
// console.log(even)

//fill[value, start, end]

// To form a array of zeros

// const arrq = new Array(3).fill(0)
// console.log(arrq) // [0,0,0]

// let arr = [1, 2, 3]

// console.log(arr.fill(0)) // [0, 0,0]
// console.log(arr.fill(0, 1)) // [1, 0,0]
// console.log(arr.fill(0, 2)) // [1, 2,0]
// console.log(arr.fill(0, 3)) // [1, 2,3]
// console.log(arr.fill(0, 0, 2)) // [0, 0,3]

// flat(depth) // takes out the nested objects in the array

// let arr = [1, 2, [3, 4], [5, 6]]

// console.log(arr.flat()) // [ 1, 2, 3, 4, 5, 6 ]

// let arr = [1, 2, [3, 4, [5, 6]]]

// // console.log(arr.flat()) //[ 1, 2, 3, 4, [ 5, 6 ] ]

// console.log(arr.flat(2)) // [ 1, 2, 3, 4, 5, 6 ]

// from
// let arr = "siva"
// let arr2 = Array.from(arr)
// console.log(arr2)

// includes

// let pets = ['cat', 'dog', 'dino']
// let pe = ""

// console.log(pets.includes("siva")) // false
// console.log(pets.includes("cat")) // true

// indexof

// console.log(pets.indexOf('dog')) //1
// console.log(pets.indexOf('siva')) // -1

//isArray

// console.log(Array.isArray(pets)) // true
// console.log(Array.isArray(pe)) // false

// join

// console.log(pets.join()) // cat,dog,dino
// console.log(pets.join('')) // catdogdino
// console.log(pets.join('-')) // cat-dog-dino



// let pets = ['cat', 'dog', 'dino']

// // pop ==> removes the last element in th array and returns tat last element

// // console.log(pets.pop()) // dino
// // console.log(pets)// [cat, dino]

// // push  ==> pushes one element to the end of the array and returns the length of the array

// // console.log(pets.push("elephant")) // 4
// // console.log(pets) // [ 'cat', 'dog', 'dino', 'elephant' ]

// // reduceRight

// console.log(pets.reduceRight((acc, curr) => acc + curr, 0))  //

// SHIFT --> removes the first element of the array


// const a = [1, 2, 3]

// console.log(a.shift()) //1
// console.log(a) // [2,3]
// console.log(a.shift()) //2
// console.log(a) // [3]

//SLICE(start, end)

// const a = [0, 1, 2, 3]
// // let b = a.slice(2)
// // console.log(b)//[2,3]

// let c = a.slice(0, 3)
// console.log(c) // [1,2]
// // console.log(a)// [ 0, 1, 2, 3 ]

// let alp = ["a", "b", "d"]
// // console.log(alp.slice(0,2)) // [a,b]
// alp.splice(2, 0, 'c')
// console.log(alp)

// console.log(alp.map((e) => {
//    return  e.toUpperCase()


// }))

// const axios = require('axios')

// let url1 = axios.get("https://catfact.ninja/fact")
// let url2 = axios.get("https://catfact.ninja/fact")
// let url3 = axios.get("https://catfact.ninja/fact")

// const a = Promise.all([url1, url2, url3])
//     .then((res) => res.map((e) => console.log(e.data.fact)))
//     .catch((err) => { console.log(err.message) })

// Callback

// const a = (b) => {

//   b()
// }

// const b = () => {
//     console.log("callBack")
// }

// a(b)

// Promise



// console.log("start")



// console.log(a)

// // a.then((res) => console.log(res.data.fact))
// //     .then((res) => console.log("SECOND"))
// //     .catch((e) => console.log("ERROR 1", e.message))
// //     .then((res) => console.log(THIRD))
// //     .catch((err) => console.log("2nd", err.message))


// console.log("end")

// const b = (c) => {
//     const a = axios.get("https://catfact.ninja/fact")
//     a.then((res) => {
//         c(res.data.fact)
//     })
//     c(a)

// }

// const c = (a) => {
//     console.log(a)
// }

// b(c)


// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Heelo")
//         //reject("ERROR")
//     }, 3000);
// })

// setTimeout(() => {
//     console.log(a)

// }, 4000);

// a.then((res) => console.log(res))
//     .catch((res) => console.log(res))


const portfolio = [
    { name: 'Mark', stock: 'FB' },
    { name: 'Steve', stock: 'AAPL' },
    { name: 'Tim', stock: 'AAPL' },
    { name: 'Steve', stock: 'MSFT' },
    { name: 'Bill', stock: 'MSFT' },
    { name: 'Bill', stock: 'AAPL' },
];

//Required Output:

// const shareholder = [
//     { stock: 'AAPL', name: ['Steve', 'Bill', 'Tim'], count: 3 },
//     { stock: 'MSFT', name: ['Steve', 'Bill'], count: 2 },
//     { stock: 'FB', name: ['Mark'], count: 1 }
// ];

// const sh = []

// let a = portfolio.map((e) => {
//     let { name, stock } = e
//     let stocks = sh.map(e => e.stock)
//     if (stocks.includes(stock)) {
//         let obj = sh.find((e) => e.stock == stock)
//         console.log(obj, "OBJECTS")
//     }
//     else {
//         sh.push({ stock: stock, name: [name], count: 1 })
//     }
// })

// console.log(sh, "FINAL")

// let b = portfolio.reduce((acc, curr) => {
//     let idx1 = acc.findIndex(e => e.stock);

//     if (accStocks.includes(curr.stock)) {
//         // let idx = acc.findIndex((e) => e.stock == curr.stock)
//         // acc[idx].name = [...acc[idx].name, curr.name]
//         // acc[idx].count = ++acc[idx].count
//     }
//     else {
//         acc.push({ stock: curr.stock, name: [curr.name], count: 1 })
//     }
//     return acc
// }, [])

// console.log(b)

// let final = portfolio.reduce((acc, curr) => {
//     let presentRecord = acc.find(ele => ele.stock == curr.stock);
//     if (presentRecord) {
//         presentRecord.name.push(curr.name)
//         ++presentRecord.count
//     } else {
//         acc.push({ stock: curr.stock, name: [curr.name], count: 1 })
//     }
//     return acc.sort((a, b) => b.count - a.count)
// }, [])

// console.log(final)

// const a = [2, 3, 4, 5]

// a.map((e, idx) => {
//     console.log(idx)

// })

// setInterval(() => {
//     let count = 0
//     console.log("HI", count++)
// }, 2000);





































































