/**
 * Module dependencies
 */
var express = require('express'),
    app = module.exports = express(),
    domain = require('domain'),
    http = require('http'),
    conf = require('./config');

// configuration =================================
// =============================
//mongoose.connect(configDB.url); // connect to our database


//defines server port
var port = conf.port;

app.set('port', process.env.PORT || port);
routes = require('./app/routes')(app);
// anti crash
d = domain.create();
d.on('error', function(err) {
    console.error(err);
});

var http = require('http');
http.createServer(app).listen(app.get('port'), function() {
    console.log('Welcome to noteSth sir');
    console.log('Im listening on port: ' + app.get('port'));
});