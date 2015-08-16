var Note = require('../models/note'),
    checkReqKeys = require('./../functions/checkReqKeys'),

    reqFields = {'owner': 'string', 'title': 'string', 'type': 'string', 'content': 'string'};


module.exports = {
    add: function(req, res, usr) {
        req.body.dateAdded = new Date();
        req.body.status = 0;
        req.body.owner = usr._id;
        var note = new Note(req.body);
        var errs = checkReqKeys(req.body, reqFields);
        if (errs === true) {
            req.body.status = 0;
            note.save(function(err, note) {
                if (err) return err;
                res.status(200).json(note);
            });
        } else {
            res.json(400, {error:{invalid: errs}}); 
        }
    },
    edit: function(req, res, usr) {
        req.body.dateModified = new Date();
        Note.update({
                _id: req.params.id,
                owner: usr._id
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
        )
    },
    remove: function(req, res, usr) {
        req.body.dateModified = new Date();
        Note.update({
                _id: req.params.id,
                owner: usr._id
            }, {
                $set: {status: 1}
            },
            function(err, note) {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(note);
                }
            }
        )
    },
    getSingle: function(req, res, usr) {
        Note.find({
            _id: req.params.id,
            owner: usr._id
        }, function(err, note) {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(note);
            }
        })
    },
    getAll: function(req, res, usr) {
        Note.find({
                    owner: usr._id
                }, function(err, note) {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.status(200).json(note);
                    }
                })
    }
}