var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/get.html',(req,res)=>{
    res.sendFile(__dirname + '/'+'get1.html');
});
app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        gender: req.query.gender,
        password: req.query.password,
        about: req.query.about
    };
    console.log(response);
    res.end("In Web Page = " + JSON.stringify(response));
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});