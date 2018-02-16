const express = require('express');
const router = express.Router();
const User = require('../models/user');
 

router.get('/users', function(req, res){
    res.send({type :'GET'});
});

router.post('/users', function(req, res){
    User.create(req.body).then(function(data){
        res.send(data); 
    });
}); 

router.put('/users/:id', function(req, res){
    res.send({type :'PUT'});
});

router.delete('/users/:id', function(req, res){
    res.send({type :'DELETE'});
});

module.exports = router;