const express = require('express');
const router = express.Router();
const User = require('../models/user');
 
router.get('/users', function(req, res, next){
    User.find().then(function(data){
        res.send(data); 
    }).catch(next);
});

router.get('/users/:id', function(req, res, next){
    User.findById({_id : req.params.id}).then(function(data){
        res.send(data); 
    }).catch(next);
});

router.post('/users', function(req, res, next){
    User.create(req.body).then(function(data){
        res.send(data); 
    }).catch(next) ;
    
}); 
router.put('/users/:id', function(req, res, next){
    User.update({_id : req.params.id},req.body).then(function(data){
        res.send(data); 
    }).catch(next) ;
});

router.delete('/users/:id', function(req, res, next){
    User.deleteOne({_id : req.params.id}).then(function(data){
        res.send(data); 
    }).catch(next);
});

module.exports = router;