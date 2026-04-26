const mongoose = require('mongoose');

const usersachema =new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }

},{timestamps:true})

const User = mongoose.model('User',usersachema);

module.exports = User;
