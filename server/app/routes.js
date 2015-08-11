var app = require('../app'),
    note = require('./routes/note'),
    user = require('./routes/user');

// BUILD STRUCTURE FOR ROUTES
app.use('/api', note);
app.use('/api', user);


// WE CAN PUT DOCUMENTATION HERE
module.exports = function(app, passport) {
    app.get('/', function(req, res) {
        res.end('Welcome to API');
    });
}