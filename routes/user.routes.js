const express = require('express');
const UserController = require('../controller/user.controller');
const router = express.Router();

router.get('/', UserController.home);

router.get('/search', UserController.search);

router.get('/create', UserController.create);

router.get('/:id', UserController.get);

router.post('/create', UserController.postCreate);

module.exports = router;