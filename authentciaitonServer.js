const express = require("express")
const Port  = 300;
const app = express();

var users = [];

app.use(express.json());


app.post("/signup", (req, res) {
    var user = req.body;
    let useralreadyExists = false;
    for (var i = 0; i< user.length; i++) {
        if (user[i].email  === user.email) {
            useralreadyExists  = true;
            break
        }
    }
    if (userAlreadyExists) {
        res.sendStatus(400);
    } else {
        user.push(user);
        res.status(201).send("Signup successful");
    }
});

app.post("login", (req, res) => {
    var user  = req.body;
    let userFound = null;
    for (var i = 0; i< users.length; i++) {
        if (users[i].email === user.email && user[i].password === user.password) {
            userFound = user[i];
            break;
        }
    }
    if (userFound) {
        res.json({
            firstname: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email
        });
    } else {
        res.sendStatus(401);
    }
});

app.get("/data", (req, res) => {
    var email = req.header.email;
    var password = req.header.password;
    let userFound = false;
    for (var i = 0; i<user.length; i++) {
        if (users[i].email = email && users[i].password === password) {
            useFound = true;
            break;
        }
    }
    if (userFound) {
        let userToReturn  = [];
        for (let i = 0; i<users.length; i++) {
            usersToReturn.psh({
                firstNme: users[i].firstName,
                lastName: users[i].lastName,
                email: users[i].email
            });
        }
        res.json({
            users
        });
    } else {
        res.sendStatus(401);
    }
});

module.exports = app;