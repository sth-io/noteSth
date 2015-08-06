/**
 Module dependencies
**/
var express     = require('express'),
    app         = module.exports = express(),
    domain      = require('domain'),
    mongoose    = require('mongoose')
    http        = require('http'),
    bodyParser     = require('body-parser'),
    conf        = require('./config');

/**
 Connect to database
**/
mongoose.connect(conf.dbUrl); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//server port
app.set('port', process.env.PORT || conf.port);

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