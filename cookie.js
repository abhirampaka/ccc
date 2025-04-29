var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

// Set cookie
app.get('/my_cookieset', (req, res) => {
    res.cookie('Name', 'Nikhil');
    res.cookie('Age', '89');
    res.status(200).send("Cookie is set")

});

// Get cookies
app.get('/', (req, res) => {
    console.log("Cookies:", req.cookies);
    res.status(200).send("It is a cookie");
});

// Get cookies in API
app.get('/my_cookieget', (req, res) => {
    res.status(200).send(req.cookies);
});

// Clear cookie
app.get('/my_cookieclear', (req, res) => {
    res.clearCookie('Name');
    res.clearCookie('Age');
    res.status(200).send("Cookie is removed");
});

// Start server
var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
