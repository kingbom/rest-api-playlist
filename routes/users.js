const express = require('express');
const router = express.Router();
const User = require('../models/user');
 
router.get('/users', function(req, res, next){
    User.find().then(function(data){
        res.send(data); 
    });
});

router.get('/users/:id', function(req, res, next){
    User.findById({_id : req.params.id}).then(function(data){
        checkDataToRes(res, data);
    });
});

router.post('/users', function(req, res, next){
    User.create(req.body).then(function(data){
        res.send(data); 
    }).catch(next);
    
});
 
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(data){
        User.findById({_id : req.params.id}).then(function(data){
            checkDataToRes(res, data);
        })
    });
});

router.delete('/users/:id', function(req, res, next){
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