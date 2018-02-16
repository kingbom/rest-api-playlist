const express = require('express');

// set up router
const router = express.Router();

router.get('/api/users', function(req, res){
    res.send({type :'GET'});
});

router.post('/api/users', function(req, res){
    res.send({type :'POST'});
});

router.put('/api/users/:id', function(req, res){
    res.send({type :'PUT'});
});

router.delete('/api/users/:id', function(req, res){
    res.send({type :'DELETE'});
});

module.exports = router;