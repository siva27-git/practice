const path = require('path');
const fs = require("node:fs");

// const p = path.basename('/js/express.js')
// console.log(p) // Gives the last item in the path --> output express.js 

// console.log(path.delimiter);
// const d = path.delimiter // ;

// i need to create a file 

// fs.writeFileSync("./pat.txt", "hello world")
// fs.writeFileSync("pat.txt", "hello world  1111")

// now i need to cretae a file inside myapp

let filePath = path.join(__dirname, 'my-app', 'src')
filePath = path.resolve(filePath, 'qw.txt')
console.log(filePath)
fs.writeFileSync(filePath, "hello worldqqqqq")