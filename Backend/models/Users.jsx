const mongoose = require('mongoose')

// User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    user_type: {
        type: String,
        emum: ['admin', 'user', 'dropshipper'],
        require: true
    }
})

// User model
const User = mongoose.model('User', userSchema)
module.exports = User