var sNote = require('./services/note');

module.exports = function (app, passport) {
//    var plans = require('./services/plans');
    
    app.get('/', function (req, res) {
        res.end('pinged')
    });
    
    app.route('/api/note')
    .post(function(req, res) {
        sNote.add(req, res);
    })
    .get(function(req, res) {
        res.send('lel')
    })
}
