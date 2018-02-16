const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;

//use body parser 
app.use(bodyParser.json());

//use router of user
app.use('/api', require('./routes/users'));

//error handing middleware
app.use(function(err, req, res, next){
    res.status(400).send({error : err.message}); 
});

//listen for requests server port
let serverPort = 4000; 
app.listen(process.env.port || serverPort, function(){
    console.log('application started on port :', serverPort);
});