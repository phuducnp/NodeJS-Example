// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.routes');

const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
})

app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})