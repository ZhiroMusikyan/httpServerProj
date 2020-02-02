const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Test request/response Operation in Node.js  Tests for the Postman...!'
    });
});

module.exports = app;