var express = require('express');
var app = express();
app.get('/',(req,res) => {
    res.send("welcome");
}).listen(8080);