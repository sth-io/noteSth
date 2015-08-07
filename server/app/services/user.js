var check   = require('./../functions/checkReqKeys'),
    User    = require('./../models/user'),
    bcrypt  = require('bcrypt-nodejs'),

    reqKey = {'email': 'email', 'password': 'string'};

module.exports = {
    register: function(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password);
        if(check(req.body, reqKey)) {
            User.findOne({email: req.body.email}, function(err, fuser) {
                if(!fuser) {
                    req.body.dateAdded = new Date();
                    user = new User(req.body);
                    user.save(function(err, usr) {
                        if (err)  res.status(400).json(err);
                        res.status(200).json(usr);
                    }) 
                } else {
                    res.status(400).json({error: 'email already in use'});
                }
            });
        }        
    },
    edit: function(req, res) {
        console.log(req.body)
        User.update({
                    "_id": req.params.which
                }, {
                    $set: req.body
                },
                function(err, user) {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(user);
                }
            })
    
    }
}