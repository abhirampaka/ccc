var http = require('http');
var op = require('./one');
var dt = require('./datetest');
var data = require('./myJSON.json');
http.createServer(function(req,res){
    //Send the HTTP header
    res.writeHead(200,{'Content-Type':'text/html'});  //HTTP Ststus: 200 : OK
    res.write('Hello, '); 
    res.write('Hello, '); 
    res.write('Hello, '); 
    res.write('Hello, '); 
    res.write('Hello, '); 
    res.write("name:"+data.name); 
    res.write("<h1>The date and time are currently: </h1>"+dt.myDateTime()); 
    // res.end("<h1>op result: <h1>"+ op.add(10,20));
    res.end("<h1>Hello People!!!!<h1>");  //response to be displayed on browser
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/'); //For console output
