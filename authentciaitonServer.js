const express = require('express');
const app = express();

app.use(express.json());

app.post('api/parse-json', (req, res) => {
    const jsonString  = req.body.data;
    const parsedData = JSON.parse(jsonString);
    res.json({ parse})
})