// Using fs to create a file inside browser

// const fs = require("fs")
// fs.writeFileSync("hello.txt", "hello")

// Passing menthods inside object

// const obj = {
//     name: "siva",
//     age: "23",
//     operation: function () {
//         console.log(this.name)
//     }
// }

// obj.operation()

// one of the method of calling for loop

// all will give the same output

// let arr = [1, 2, 3, 4, 5]

// for (let a of arr) {
//     console.log(a)
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr.map((a) => console.log(a))

// Below stateme will throw error
//const cannot be re assigned, but in case of array we can re assign

// const vehicle = "car"
// vehicle = "bike"  //--> Error

// Below statement also will end in error

// const vehicles = ["car", "bike"]
// vehicles = ["truckr"]  // --> error

// const vehicles = ["car", "bike"]
// vehicles[0] = "truck"  // --> This will not trow error
// console.log(vehicles)  // output = ["truck", "bike"]

// const obj = { name: "siva" }
// obj = { age: "23" } // --> //this will throw error

// const obj = { name: "siva" }
// obj.name = "avis"  // --> this will work

// console.log(obj)  // output = {name :avis}

// if we copying a array to another array wit the below method it may end up in some issue.

// let arr = ["car", "bike"]
// let arr1 = arr
// arr1[2] = "cycle"

// console.log(arr)  // output [car, bike, cycle]
// console.log(arr1)  // output [car, bike, cycle]

//Spread operator --> 
//allows us to quickly copy all or part of an existing array or object into another array or object.

// using spread operator is the correct way

// let arr = ["car", "bike"]
// let arr1 = [...arr]
// arr1[2] = "cycle"

// console.log(arr)  // output [car, bike]
// console.log(arr1)  // output [car, bike, cycle]

// Below is not a correct way, always use spread operator


// const obj = {name : "siva"}
// let objs = obj
// objs.age = 23

// console.log(obj)  // { name: 'siva', age: 23 }
// console.log(objs)  // { name: 'siva', age: 23 }



// const obj = { name: "siva" }
// let objs = { ...obj }
// objs.age = 23

// console.log(obj)  // { name: 'siva'}
// console.log(objs)  // { name: 'siva', age: 23 }

// Rest operator  -> allows a function to accept an indefinite number of arguments as an array, 
//providing a way to represent variadic functions in JavaScript

// If we have ... in the parms menas it called as rest operatop


// const arrOld = (arr1, arr2, arr3) => {
//     return [arr1, arr2, arr3]
// }

// console.log(arrOld(1, 2, 3, 4, 5))  // [1,2,3]
// // the above will give only three output, to what if it keeps on increasing
// // to overcome this we can use rest operator

// const arrayFu = (...arr) => {
//     return arr
// }

// console.log(arrayFu(1, 2, 3, 4, 5)) // [1,2,3,4,5]

// callabcks

// with the help of callbacks only asynchorouns is possible in js

// console.log("Hi");

// const callUs = (back) => {
//     setTimeout(() => {
//         back("Final Call Back")
//     }, 3000);
// }

// setTimeout(() => {
//     callUs((back) =>{
//         console.log(back)
//     })
// }, 2000);

// console.log("bye");

// clean Example for call back

// console.log("Started");

// const apiCall = (callBack) => {
//     setTimeout(() => {
//         callBack("API RESPONSE")
//     }, 2000);
// }

// const callSecondApi = (back) => {
//     setTimeout(() => {
//         back("Final")

//     }, 2000);
// }

// const callThirdAPI = (back) => {
//     setTimeout(() => {
//         back("#rd")
//     }, 2000);
// }

// const api = apiCall((res) => {
//     console.log(res)
//     callSecondApi((res) => {
//         console.log(res)
//         callThirdAPI((res) => {
//             console.log(res)
//         })
//     })
// }
// )

// console.log(api)
// console.log("END")

// Call backs having two problmes , inversion of controll and call back hell

// callback hell --> callback insiside a call back and soo onn.
// Inversion of control --> we dont have control to handle the functions in the call backs

// Promise

// To overcome the following issues in call back promise is used.

// If we pass new before the Promise it will create a object

// Examples

// console.log("start")

// const firstPromise = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove("helele")
//     }, 3000);

// })

// console.log(firstPromise)  // pending

// setTimeout(() => {
//     console.log(firstPromise)  //Promise {'helele'}

// }, 5000);

// firstPromise.then((lo) => {
//     console.log(lo) // helele

// }).catch(() => {
//     console.log("failed")
// })

// console.log("end")

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("1")
//     }, 1000);
// })

// promise.then((r) => {
//     return r // we need to retrun after the end of on then
// }).then((r) => {
//     console.log(r)

// }).catch(() => { 
//     // This catch block is applicable for all the above then blocks
// })

// Http and Https

// the above both is used to transfer or communicate data  between the browser and the server

// Node Js core modules

// Fs, http, https, os, path ...

//require function doesnot require file extension

// Creating Node Server

// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.headers)  // complete headers
//     console.log(req.method)  // method GET, POST, PUT, PATCH
//     console.log(req.url)  // /test
//     console.log(req.body) // Not able get the body

//     //res.setHeader('Content-type', 'application/json')  // for json
//     //res.write('{name: hi}')

//     res.setHeader(`Content-type`, 'text/html')
//     res.write('<html>')
//     res.write('<head><title>NODE JS</title></head>')
//     res.write('</html>')
//     res.end()
// })

// server.listen(3000)


// with node js alone we can build servers, but its little complicated to handle the request and resposes.
// To overcome this we can use express js frame work

//fs.writeFile // is asyncronous 
//fs.writeFileSync // as per the same its synchronous  it will wait unitil the file is written

// let grid = ["bacde", "fghij", "klmno", "pqrst", "uvwxy"]

// let grids = grid.map((ele) => ele.split("").sort())


// for (let i = 0; i < grids.length; i++) {
//     let index = i
//     for (let j = 0; j < grids.length; j++) {
//         console.log(grids[i][j])

//     }
// }

// console.log("start")

// const firstPromise = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         console.log("helele")
//     }, 0);

// })

// console.log("end")

const axios = require("axios")

// with promise

//axios itself a promise based

// const apiCheck = () => {
//     console.log("start");
//     const api = axios.get("https://catfact.ninja/fact")
//     api.then((res) => {console.log(res.data.fact)})
//     console.log("stop")
// }

// Above example 
//start
// stop
// fact


// const apiCheck = async () => {
//     console.log("start");
//     const api = await axios.get("https://catfact.ninja/fact")
//     console.log(api.data.fact)
//     console.log("stop")
// }

// apiCheck()

// above example

// start
// fact
// stop

// let arr1 = [1, 2, 3, 3, 4]
// let arr2 = [1, 2, 3, 4, 5]

// let arr3 = [...arr1, ...arr2]
// let arr4 = new Set([...arr1, ...arr2])

// console.log(arr4)

// let newSet = new Set([1,2])
// console.log(newSet)

// let newArry = Array.from(Array(11).keys()).slice(1)
// console.log(newArry)

// let a = [ 1, 2, 3, 4, 5 ]
// //a.unshift()  // will add in first
// let d = 4

// // unshift will add elements in the first
// // push will push to last
// console.log(a)





















