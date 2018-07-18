const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppinglist')
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));