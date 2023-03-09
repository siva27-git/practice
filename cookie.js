const express = require('express');
// const cookieParser = require('cookie-parser');


const app = express();

// app.use(cookieParser());


app.get('/set-cookie', (req, res) => {
    res.cookie('isLoggedIn', true, { httpOnly: true, maxAge: 10000 });
    res.cookie('token', "sssssss", { httpOnly: true, maxAge: 10000 });

    /* 
    httpOnly = we can access the cookie only in the headers not the client body or document
    maxAge = after the max aage the cookie will be deleted
     */

    res.cookie('isLoggedOut', true);
    res.send('Cookies Added')

})

app.get('/read-cookie', (req, res) => {
    console.log(req.headers)
    res.json(req.cookies)
})

app.listen(3000, () => {
    console.log("application stated")
})