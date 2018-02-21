 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const bcrypt   = require("bcryptjs");

 const UserSchema = mongoose.Schema({
    name : { 
        type: String, 
        required : [true, 'name is required .']
    },
    mobile : { 
        type: String,
        unique: true, 
        required : [true, 'mobile is required .']
    },
    email : { 
        type: String, 
        unique: true, 
        required : [true, 'email is required .'],
        match : /.+\@.+\.+/
    },     
    password : { 
        type: String, 
        required : [true, 'password is required .']
    },
    age : { 
        type: Number
    },
    sex : { 
        type: String
    },
    avilable : {
        type : Boolean,
        default : true
    }
});

 const User = mongoose.model('user', UserSchema); 

 /**
  * add user
  * @param {*} user 
  * @param {*} callback 
  */
module.exports.add = function(user, callback){
    User.create(user, callback);    
}

/**
 * find all
 * @param {*} callback 
 */
module.exports.findAll = function(callback){
    User.find(callback);
}

 /**
  * find by id
  * @param {*} id 
  * @param {*} callback 
  */
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

/**
 * fine by email
 * @param {*} email 
 * @param {*} callback 
 */
module.exports.getUserByEmail = function(email, callback){
    const query = {email: email};
    User.findOne(query, callback);
}

/**
 * delete by id
 * @param {*} id 
 * @param {*} callback 
 */
module.exports.delete = function(id, callback){
    User.findByIdAndRemove({_id : id} , callback);    
}

/**
 * update by id
 * @param {*} id 
 * @param {*} user 
 * @param {*} callback 
 */
module.exports.update = function(id, user, callback){
    User.findByIdAndUpdate({_id : id}, user, callback => {
        User.findById(id, callback);
    });    
}

/**
 * verifyPassword
 * @param {*} candidatePassword 
 * @param {*} hash 
 * @param {*} callback 
 */
module.exports.verifyPassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err
        callback(null, isMatch);
    });
}