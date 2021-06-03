const express = require('express');
const userRoutes = require('./routes/user');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/public', express.static(`${__dirname}/storage/imgs`));
app.use('/v1', userRoutes)

module.exports = app;
