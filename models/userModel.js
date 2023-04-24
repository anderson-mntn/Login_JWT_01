const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true, min: 3, max: 50},
    email: {type: String, required: true, min: 3, max: 80},
    password: {type: String, require: true, min: 3, max: 50},
    creationDate: {type: Date, default: Date.now},
})

module.exports = mongoose.model('User', userSchema);