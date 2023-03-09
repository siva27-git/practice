//Express.js --> Frame work
// with the help of express server logic complexity can be reduced.

// Express js is using body parsed package aslo.

//Body parser will pars

//express setup wihout body parser

// const express = require('express');
// const app = express();

// app.use('/', (req, res, next) => {
//     console.log('First Middleware')// now witout calling next function only first middleware alone will be printed
//     next() // if we call this next() , now request will go to secong middleware.
// })
// app.use('/', (req, res, next) => {
//     console.log('Second Middleware')
// })

// app.listen(3000)

// with body parser

const express = require('express');
const bodyParser = require('body-parser');
const { Worker } = require('worker_threads')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())  // to acept json

app.get('/non-blocking', (req, res) => {
    res.send("Non Blocking")
})



app.get('/blocking', async (req, res) => {
    const worker = new Worker('./worker.js');

    worker.on("message", (data) => {
        res.send(`Data ${data}`);
    })

    worker.on("error", (error) => {
        res.send(`Error ${error}`)
    })

})




app.listen(3000, () => {
    console.log('server started in port 3000')
})


