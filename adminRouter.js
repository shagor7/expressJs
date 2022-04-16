const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const adminRouter = express.Router();


adminRouter.get('/', (req, res) => {
    res.send('Dashboard');
});

adminRouter.get('/login', (req, res) => {
    res.send('login page');
});

module.exports = adminRouter;