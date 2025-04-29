var express = require('express');
var app = express();
app.get('/',(req,res) => {
    res.send("welcome");
})
app.get('/services',(req,res) => {
    res.send("Its services");
}).listen(8080);

