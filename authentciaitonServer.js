const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const filePath = path.join(__dirname, 'uploads', 'file.txt');

const absoultePth = path.resolve('views', 'index.html');
