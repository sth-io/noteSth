// app/models/Note.js
// load the things we need
var mongoose = require('mongoose')

// define the schema for our user model
var noteSchema = new mongoose.Schema({
    owner: String,
    title: String,
    type: String,
    content: String,
    dateAdded: Date,
    dateModified: Date,
    status: Number    
})

// // create the model for users and expose it
mongoose.model('Note', noteSchema)
module.exports = mongoose.model('Note', noteSchema)