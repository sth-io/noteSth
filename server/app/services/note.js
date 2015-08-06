var Note = require('../models/note');
var reqFields = ['owner', 'title'];


module.exports = {
    add: function(req, res) {
        var errs = [];
        var note = new Note(req.body);
        var verify =  function() {
               
                for (i = 0, len = reqFields.length; i < len; ++i) {
                    if(Object.keys(req.body).indexOf(reqFields[i]) === -1) {
                        errs.push(reqFields[i]);
                    } 
                }
                if(errs.length == 0) {
                    return true;
                } else {
                    return false;
                } 
            }
        if(verify() == true) {
            note.save(function(err) {
                if (err) return err;
                res.end('succes');
            })            
        } else {
                res.send(errs) 
        }
    }
}