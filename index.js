const express = require('express');

//set up express app
const app = express();

app.get('/api/users', function(req, res){
    res.send({name : 'jaruwit suriyo2'});
});

//listen for requests server port
let serverPort = 4000; 
app.listen(process.env.port || serverPort, function(){
    console.log('application started on port :', serverPort);
});