//init code
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    thread_name: {
        type: String,
        required: true,
        unique: true
    },
    thread_user :{
        type: String,
        required: true,
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
mongoose.model('thread', userSchema,'mythreads');

//module exports
module.exports = mongoose.model('thread');