const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    password: String,
    email:String,
    created_at: {type : Date, default: Date.now() },
    updated_at: {type : Date, default: Date.now() }
})

const user = mongoose.model("user", userSchema);
module.exports =  user;