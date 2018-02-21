const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require("./config/database");
const passport = require("passport");


//set up express app
const app = express();

//set connect to mongodb
mongoose.connect(config.mongodb);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => console.log('connected to database :', config.mongodb));
mongoose.connection.on('error', () => console.log('connect to database error :', config.mongodb));

//use body parser 
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session())

require('./config/passport')(passport);

//use router of user
app.use('/api', require('./routes/users'));

//error handling middleware
app.use((err, req, res, next) => {
    res.status(400).send({error : err.message}); 
});

//listen for requests server port
let serverPort = process.env.PORT || 4000; 
app.listen(serverPort, () => {
    console.log('application started on port :', serverPort);
});