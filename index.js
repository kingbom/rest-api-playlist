const express = require('express');

//set up express app
const app = express();

//listen for requests server port
let serverPort = 4000; 
app.listen(process.env.port || serverPort, function(){
    console.log('application started on port :', serverPort);
});