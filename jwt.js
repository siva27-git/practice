// JWT - JSON web token is one way of authrazation not authuntication
// bcrypt - is one of the library which is used to hash password with a salt.
// salt is noting but a unique value.



require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { PORT, ACCESS_TOKEN_KEY } = process.env;

const users = [];

const app = express();

app.use(express.json());

app.post('/addUser', async (req, res) => {

    let { userName, password } = req.body;

    if (userName && password) {
        const user = users.find(ele => ele.userName == userName);
        if (!user) {
            password = await bcrypt.hash(password, 10);
            users.push({ userName, password });
            res.status(200).json({ message: "user added successfully !" });
        }
        else {
            res.status(500).json({ message: "user added exists !" });
        }
    }
    else {
        res.status(401).json({ message: "mandatory fields are missing !" })
    }
});

app.post('/user/login', async (req, res) => {

    let { userName, password } = req.body;

    if (userName && password) {
        const user = users.find(ele => ele.userName == userName);
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const access_token = jwt.sign({ userName }, ACCESS_TOKEN_KEY, { expiresIn: '15s' });
                res.status(200).json({ message: "logged in successfully !", access_token });
            }
            else {
                res.status(401).json({ message: "invalid password" });
            }
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    else {
        res.status(401).json({ message: "mandatory fields are missing" })
    }
});

const middleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(' ')[1];
        jwt.verify(token, ACCESS_TOKEN_KEY, (err, data) => {
            if (err) {
                res.status(400).json({ message: "unauthorized" })
            }
            else {
                req.data = data
                next()
            }
        });

    } catch (e) {
        console.log("ERROR")
    }
};

app.get('/userDetails', middleware, (req, res) => {
    const userData = users.find((ele) => ele.userName == req.data.userName);
    res.status(200).json(userData);
});

app.get('/users', (req, res) => {
    res.json(users);
});




app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});