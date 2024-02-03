const express = require("express");
const { authenticateJwt, SECRET } = require("../middleware/index");
const { Todo } = require("../db");
const router = express.Router();

interface CreateTodoInput {
    title: string;
    description: string;
}

// Zod => input validation libraries
router.post('/todos', authenticateJwt, (req, res) => {
    const inputs: CreateTodoInput = req.body;
    const done  = false;
    const userId = req.header["userId"];

    const newTodo = new Todo({ title, description, done, userId });

    newTodo.save()
        .then((savedTodo) => {
            res.status(201).json(savedTodo);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to create a new todo' });
        });
});

router.get('/todos', authenticateJwt,(req, res) => {
    const userId = req.userId;

    Todo.find({ userId })
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to retrieve todos' });
        });
});

router.patch('.todos/:todoId/done', authenticateJwt, (req, res) => {
    const { todoId } = req.params;
    const userId = req.userId;

    Todo.findOneAndUpdate({ _id: todoId, userId}, { done: true}, {new: true})
        .then((updatedTodo) => {
            if (!updatedTodo) {
                return res.status(404).json({ error: 'Todo not foudn' });
            }
            res.json(updatedTodo);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to update todo' });
        });
});

module.exports = router;