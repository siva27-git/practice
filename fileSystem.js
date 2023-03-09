// const fs = require('fs')

// Read File

// console.log("start")

// syncronouns read -- blocking method

// const file = fs.readFileSync('hello.txt')
// console.log(file.toString()) // Hello

//asynchronous read method -- non blocking

// const file = fs.readFile('hello.txt', (err, data) =>{
//     if (err) console.log('Error', err)
//     console.log(data.toString()) // Hello
// })

// synchrouns write --> overwrites the file

// const file = fs.writeFileSync('hello.txt', "!@#$")

// asynchrounous write --< overwrites the file

// const file = fs.writeFile('hello.txt', "GREAT GREAT", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("WRITTEN SUccessfully")
// })

// append file  async--> adds in the same file


// const file = fs.appendFile('hello.txt', "HELLO", (err, data) => {
//     if (err) console.log(err)
//     console.log("Data Added ")

// })

// append file sync

// const file = fs.appendFileSync('hello.txt', 'Great job')

// Deleting async

// fs.unlinkSync('hello.txt')

// Deleting sync

// fs.unlink('hello.txt', () =>{

// })


// console.log("stop")

// Promise based fs

const fs = require("node:fs/promises")

console.log("start")

// fs.writeFileSync('fsss.txt', 'Hello'); //this will fail (fs promise module is only for async)

fs.writeFile('fss.txt', "HelloLLLLLLLLL")
    .then((data) => console.log("Done"))
    .catch((error) => console.log(error))

fs.readFile('fss.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

console.log("stop")





