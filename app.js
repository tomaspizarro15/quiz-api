const express = require('express');

const app = express();
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET , PUT , PATCH ,UPDATE , POST , DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization')
    next();
})
module.exports = app