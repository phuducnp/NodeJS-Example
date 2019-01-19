// import express from 'express';
const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: [
            { id: 1, name: 'Duc'},
            { id: 2, name: 'Long'},
            { id: 3, name: 'Vi'}
        ]
    });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})