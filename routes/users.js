const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt   = require("bcryptjs");
 
router.get('/users', (req, res, next) => {
    User.find().then(function(data){
        res.send(data); 
    });
});

router.get('/users/:id', (req, res, next) => {
    User.findById({_id : req.params.id}).then(function(data){
        checkDataToRes(res, data);
    });
});

router.post('/users', (req, res, next) => {
    User.create(req.body).then(function(data){
        res.send(data); 
    }).catch(next);
});

router.post('/register', (req, res, next) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err
            req.body.password = hash;
            User.create(req.body).then(function(data){
                res.send(data); 
            }).catch(next);
        });
    });
});
 
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(data){
        User.findById({_id : req.params.id}).then(function(data){
            checkDataToRes(res, data);
        });
    });
});

router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id : req.params.id}).then(function(data){
        checkDataToRes(res, data);
    });
});

var checkDataToRes = (res, data) => {
    if(data){
        res.send(data); 
    }else{
        res.status(404).send({error : "data not found"}); 
    }
}

module.exports = router;