//init code
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    },
    createdOn :{
        type: Date,
        default: Date.now()
    }
})

//user model
mongoose.model('user', userSchema,'userdata');

//module exports
module.exports = mongoose.model('user');