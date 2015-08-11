// API NOTE ROUTES -------------------
var app = require('../../app'),
    express = require('express'),
    apiRoutes = express.Router(),

    sNote = require('../services/note'),
    Note = require('../models/note'),
    auth = require('../services/auth');


// DEFAULT NO TOKEN RETURN
var notoken = function(res) {
    res.status(400).json({
        error: "Token Invalid"
    });
}

// DEFINE ROUTES -------------------
apiRoutes.route('/note')
    .post(function(req, res) {
        auth(req, function(cb) {
            if (cb) {
                sNote.add(req, res, cb);
            } else {
                notoken(res);
            }
        });

    })
    .get(function(req, res) {
        auth(req, function(cb) {
            if (cb) {
                sNote.getAll(req, res, cb);
            } else {
                notoken(res);
            }
        });
    });
apiRoutes.route('/note/:id')
    .get(function(req, res) {
        auth(req, function(cb) {
            if (cb) {
                sNote.getSingle(req, res, cb);
            } else {
                notoken(res);
            }
        });
    })
    .put(function(req, res) {
        auth(req, function(cb) {
            if (cb) {
                sNote.edit(req, res, cb);
            } else {
                notoken(res);
            }
        });
    })
    .delete(function(req, res) {
         auth(req, function(cb) {
            if (cb) {
                sNote.remove(req, res, cb);
            } else {
                notoken(res);
            }
        });
    });

// make our route visible for ../routes.js
module.exports = apiRoutes;