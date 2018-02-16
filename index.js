const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

//use body parser 
app.use(bodyParser.json());

//use router of user
app.use('/api', require('./routes/users'));

//listen for requests server port
let serverPort = 4000; 
app.listen(process.env.port || serverPort, function(){
    console.log('application started on port :', serverPort);
});