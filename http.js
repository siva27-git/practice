const http = require('http');
// http is the languange that communicates between the client and server
// the client sends a http request to ther server
// the server sends a http response to the client

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.write("{hi:json}")
    res.end()
})

server.listen(3000, () => {
    console.log("Server started in port 3000")
})

