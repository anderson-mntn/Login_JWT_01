const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, minlength: 3, maxlength: 80},
    password: {type: String, require: true, minlength: 3, maxlength: 200},
    creationDate: {type: Date, default: Date.now},
})

module.exports = mongoose.model('User', userSchema);