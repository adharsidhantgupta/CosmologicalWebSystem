//init code
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    threadname: {
        type: String,
        required: true
    },
    postname:{
        type: String,
        unique: true,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    userOfreply :{
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
mongoose.model('reply', userSchema,'userreply');

//module exports
module.exports = mongoose.model('reply');