var sNote = require('./services/note'),
    Note = require('./models/note');

module.exports = function(app, passport) {
    //    var plans = require('./services/plans');

    app.get('/', function(req, res) {
        res.end('pinged')
    });

    app.route('/api/note')
        .post(function(req, res) {
            sNote.add(req, res);
        })
        .get(function(req, res) {
            Note.find({
                owner: 'test'
            }, function(err, note) {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(note);
                }
            })
        });
    app.route('/api/note/:id')
        .get(function(req, res) {
            Note.find({
                _id: req.params.id
            }, function(err, note) {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(note);
                }
            })
        })
        .put(function(req, res) {
            req.body.dateModified = new Date();
            Note.update({
                    _id: req.params.id
                }, {
                    $set: req.body
                },
                function(err, note) {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(note);
                }
            }
        )})
}
             