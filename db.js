const mongoose = require('mongoose');
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV
if(NODE_ENV === 'development'){
    mongoose.connect('mongodb://localhost/shoppinglist')
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
if(NODE_ENV === 'test'){
    mongoose.connect('mongodb://localhost/shoppinglist_test')
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
if(NODE_ENV === 'staging'){
    mongoose.connect('mongodb://localhost/shoppinglist')
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
if(NODE_ENV === 'production'){
    mongoose.connect('mongodb://localhost/shoppinglist')
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

