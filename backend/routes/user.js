const express = require('express');
const upload = require('../libs/storage')
const { addUser, getUsers } = require('../controllers/userController');

const api = express.Router()

api.post('/users', upload.single('imgUrl'), addUser);
api.get('/users', getUsers);

module.exports = api;
