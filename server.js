////////////DEPENDENCIES//////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

///Controllers////
var simpsons = require('./controllers/Simpson');

///Express///
var server = express();

///Port///
var port = 8080;

//Middleware//
server.use(bodyParser.json());
server.use(cors());

///Endpoints///
server.post('/simpson', simpsons.create);
server.get('/simpson', simpsons.read);

server.listen(port, function (){
    console.log("I'm still watching you", port);
});
