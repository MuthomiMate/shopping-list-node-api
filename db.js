const mongoose = require('mongoose');
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV
if(NODE_ENV === 'test'){
    mongoose.connect(process.env.TEST_DATABASE_URL)
}else{
    mongoose.connect(process.env.DATABASE_URL)
}
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


