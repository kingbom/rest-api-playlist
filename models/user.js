 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 /*const GeoSchema = new Schema({
     type : {
         type : String,
         default : "Point"
     },
     coordinates : {
         type : [Number],
         index : "2dsphere"
     }   
 });

 const UserSchema = new Schema({
     name : {
         type: String,
         required : [true, 'name is required .']
     },
     mobile : {
        type: String,
        required : [true, 'mobile is required .']
     },
     email : {
        type: String,
        required : [true, 'email is required .']
     },
     position : {
        type: String
     },
     avilable : {
         type : Boolean,
         default : false
     },
     geometry : GeoSchema 
 });*/

 const UserSchema = mongoose.Schema({
    name : { type: String, required : [true, 'name is required .']},
    mobile : { type: String, required : [true, 'mobile is required .']},
    email : { type: String, required : [true, 'email is required .']},
    password : { type: String, required : [true, 'password is required .']},
    age : { type: Number},
    sex : { type: String},
    avilable : {type : Boolean,default : true}
});

 const User = mongoose.model('user', UserSchema); 
 module.exports = User;