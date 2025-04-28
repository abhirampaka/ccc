// Routing file defined for routing-2.js
var express = require('express');
var routerObj = express.Router();
routerObj.get('/',function(req,res){
    res.send('Welcome to express');
});
routerObj.post('/',function(req,res){
    res.send('POST request from the server.....');
});


//export this router to use in ur index.js
module.exports = routerObj;