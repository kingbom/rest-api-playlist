const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt   = require("bcryptjs");
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const config   = require("../config/database");
 
router.get('/users', (req, res, next) => {
    User.findAll((err, data) =>{
        res.send(data); 
    });
});

router.get('/users/:id', (req, res, next) => {
    User.getUserById(req.params.id, (err, data) => {
        checkDataToRes(res, data);
    });
});

router.post('/users', (req, res, next) => {
    User.add(req.body, (err, data) =>{
        res.send(data); 
    });
});

router.post('/register', (req, res, next) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err,  hash) => {
            if(err) throw err
            req.body.password = hash;
            User.add(req.body, (err, data) =>{
                res.send(data); 
            });
        });
    });
});
 
router.put('/users/:id', (req, res, next) => {
    User.update(req.params.id, req.body, (err, data) => {
        User.getUserById(req.params.id, (err, data) => {
            checkDataToRes(res, data);
        });
    });
});

router.delete('/users/:id', (req, res, next) => {
    User.delete(req.params.id, (err, data) => {
        checkDataToRes(res, data);
    });
});

router.post('/authentication', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'Invalid authentication'});
        }
        verifyPassword(password, user, res);
    });
});

var verifyPassword = (password, user, res) => {
    User.verifyPassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
            const token = jwt.sign(user, config.secrect, {
                expiresIn : 684800 
            });

            res.json({
                success: true,
                token : 'JWT '+token,
                name : user.name,
                email: user.email,
                mobile: user.mobile,
                age : user.age,
                avilable : user.avilable
            });
        }else{
            return res.json({success: false, msg: 'Invalid authentication'});
        }
    });
}

var checkDataToRes = (res, data) => {
    if(data){
        res.send(data); 
    }else{
        res.status(404).send({error : "Data not found"}); 
    }
}

module.exports = router;