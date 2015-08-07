// app/models/User.js
// load the things we need
var mongoose = require('mongoose')

// define the schema for our user model
var userSchema = new mongoose.Schema({
    login: String,
    password: String,
    email: String,
    dateAdded: Date,
    dateModified: Date
})

// // create the model for users and expose it
mongoose.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)