const express = require('express');
const routesUsers = require('./routes/users')

//set up express app
const app = express();

//use router
app.use(routesUsers);

//listen for requests server port
let serverPort = 4000; 
app.listen(process.env.port || serverPort, function(){
    console.log('application started on port :', serverPort);
});