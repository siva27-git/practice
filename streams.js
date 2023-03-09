const fs = require('fs')

// A stream is data tat is moved form one point to another over a period of time
// example file transfer from one place to another
// The main idea is to handle the data in chunks, insted of full data
// default stream size is 64kb


// let data = ""

// console.log("Started")

// const read = fs.createReadStream('hello.txt');

// read.on('data', (chunk) => {
//     data = data + chunk
// })

// read.on('end', () => {
//     console.log(data)
// })

// console.log("ENDED")

// write stram

// const data = "Its been great working with you..!"

// const write = fs.createWriteStream('out.txt')

// write.write(data)

// write.end()

// write.on('finish',()=> {
//     console.log("Completed")

// })

// piping

// const reader = fs.createReadStream('out.txt');

// const writeer = fs.createWriteStream('out2.txt')

// reader.pipe(writeer)


// console.log("END")

// Now  all the data will be read in single chunck and data is in buffer format

// const readStram = fs.createReadStream('out.txt')

// readStram.on("data", (chuck) => {
//     console.log(chuck)//Buffer 49 74 73 20 62 65 65 6e 20 67 72 65 61 74 20 77 6f 72 6b 69 6e 67 20 77 69 74 68 20 79 6f 75 2e 2e 21
// })

// now data is in string format after addeing encoding

// const readStram = fs.createReadStream('out.txt', { encoding: 'utf-8' })

// readStram.on("data", (chuck) => {
//     console.log(chuck) // Its been great working with you..!
// })

// Now the chuck will consume 2 bytes at a time

// const readStram = fs.createReadStream('out.txt', { encoding: 'utf-8', highWaterMark: 20 })
// const writStrm = fs.createWriteStream('out2.txt')

// now two times log will print 
//Its been great worki
// ng with you..!

// readStram.on("data", (chuck) => {
//     console.log(chuck)
//     writStrm.write(chuck) 
// })

// pipe

// const reader = fs.createReadStream('out.txt');
// const writeer = fs.createWriteStream('out2.txt')
// reader.pipe(writeer)

fs.createReadStream('out.txt').pipe(fs.createWriteStream('out2.txt'))

/* Types of streams
1. Readeable stramsn = reads data
2. writable stream = writes data
3. duplex  stream = sockets
4. Transform stram = file compresssion
 */






