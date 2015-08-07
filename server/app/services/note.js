var Note = require('../models/note'),
    checkReqKeys = require('./../functions/checkReqKeys'),

    reqFields = ['owner', 'title', 'type', 'content'];


module.exports = {
    add: function(req, res) {
        req.body.dateAdded = new Date();
        var note = new Note(req.body);
        var errs = checkReqKeys(Note, req.body, reqFields);
        if (errs === true) {
            
            req.body.status = 0;
            note.save(function(err) {
                if (err) return err;
                res.end('succes');
            })
        } else {
            res.json(400, {error:{invalid: errs}}); 
        }
    }
}