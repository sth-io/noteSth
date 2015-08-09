var sNote   = require('./services/note'),
    Note    = require('./models/note'),
    sUser    = require('./services/user');



module.exports = function(app, passport) {
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
        .delete(function(req,res) {
            sNote.remove(req, res);
        });
    app.route('/api/user')
        .post(function(req, res) {
            sUser.register(req, res);
        })
        .put(function(req, res) {
            sUser.edit(req, res);
        })
}
             