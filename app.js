const express = require('express');
app = express();
const db = require('./db');


const routes = require('./routes');
app.use(routes);
module.exports = app;
