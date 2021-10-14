//init code
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    posted :{
        type: Number,
        required: true
    },
    replied:{
        type: Number,
        required: true
    },
    threads :{
        type: Number,
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
mongoose.model('stats', userSchema,'userstats');

//module exports
module.exports = mongoose.model('stats');