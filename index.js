// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const shortid = require('shortid');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: [] })
  .write()

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
})

app.get('/users/search', (req, res) => {
    const q = req.query.q;
    const matchedUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    
    res.render('users/index', {
        users: matchedUsers
    });
});

app.get('/users/create', (req, res) => {
    res.render('users/create');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
});

app.post('/users/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})