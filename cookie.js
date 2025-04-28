var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/my_cookieset',(req,res)=>{
    res.cookie('Name','Nikhil').send('Cookie is set');
});
app.get('/',(req,res)=>{
    console.log("Cookies:",req.cookies);
});
app.get('/my_cookieget',(req,res)=>{
    res.status(200).send(req.cookies);
});
app.get('/',(req,res)=>{
    res.status(200).send("It is a cookie");
});
app.get('/my_cookieclear',(req,res)=>{
    res.clearCookie('Age');
    res.status(200).send("Cookie is removed");
});

