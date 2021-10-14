//init code
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    threadname: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    userOfPost :{
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
mongoose.model('posts', userSchema,'userposts');

//module exports
module.exports = mongoose.model('posts');