// process.nextTick()  ==> delay the execution untill the next event iteration
// setImmediate ==> pushes the call back function to the event loop

//nextTick will be executed as soon as the current phase engds

// console.log("Hi")

// process.nextTick(() => {
//     console.log("nextTick")
// })

// console.log("Bye")

console.log("Hi")







process.nextTick(() => {
    console.log("nextTick")
})



const dev = () =>{
    setTimeout(() => {
        console.log("Hi")
    }, 1000);
}

dev()













