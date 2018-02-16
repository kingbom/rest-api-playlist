 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const UserSchema = new Schema({
     name : {
         type: String,
         require : [true, 'name is required .']
     },
     mobile : {
        type: String,
        require : [true, 'mobile is required .']
     },
     email : {
        type: String,
        require : [true, 'email is required .']
     },
     position : {
        type: String
     },
     avilable : {
         type : Boolean,
         default : false
     } 
 })

 const User = mongoose.model('user', UserSchema); 
 module.exports = User;