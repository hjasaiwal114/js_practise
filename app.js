import express from "express";

const app  = express();

app.get('/', (req, res) => {
    res.status(404).json({
        javab: "hello ",
    });
})

app.listen(4000, () => {
    console.log(`Server is working`)
})