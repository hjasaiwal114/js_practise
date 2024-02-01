const express = require('express');
const bodyParse = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

function findIndex(arr, id) {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr, index) {
    let newArray = [];
    for (let i = 0; i < arr.lenght; i++) {
        if ( i !== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos', (req, res) => {
    fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.get('/todos/:id',(req, res) => {
    fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos =JSON.parse(data);
        const todoIndex = findIndex(todos, pareInt(req.params.id));
        if (todoIndex === -1) {
            res.status(404).send();
        } else {
            res.json(todos[todoIndex]);
        }
    });
}) ;

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random()* 1000000),
        title: req.body.title,
        description: req.body.description
    };
    fs.readFile("todos.json", "utf", (err, data) => {
        if (err) throw err;
        const todos  = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile("todos.json", JSON.stringify(todos), (err)=> {
            if (err) throw err;
            res.status(201).json(newTodo);
        });
    });
});


app.put('/todos/:id', (req, res) => {
    fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id))
        if(todoIndex === -1) {
            res.status(404).send();
        } else {
            const updateTodo ={
                id: todos[todoIndex].id,
                title: req.body.title,
                description: req.body.description
            };
            todos[todoIndex] = updateTodo;
            fs.writeFile("todo.json", JSON.stringify(todos), (err) =>{
                if (err) throw err;
                res.status(200).json(updatedTodo);
            });
        }
    });
});

app.delete('todos/:id', (req, res) => {
    fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todosIndex = findIndex(todos, parseInt(req.params.id))
        if (todosIndex === -1) {
            res.status(404).send();
        } else {
            todos = removeAtIndex(todos, todosIndex);
            fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
                if (err) throw err;
                res.send(200).send();
            });
        }
    });
});

app.use((req, res, next) => {
    res.status(404).send();
})

module.exports = app;