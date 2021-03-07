const parser = require('body-parser')
const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET , PUT , PATCH ,UPDATE , POST , DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization')
    next();
})

app.use('/', (req, res, next) => {
    res.status(200).json({
        msg : "Welcome to quiz-api listening at PORT:8080"
    })
})

app.listen(PORT)