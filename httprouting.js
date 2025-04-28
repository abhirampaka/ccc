var http = require("http");
var url = require('url');
http.createServer(function(req,res){
if(req.url=="/"){
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end("Home Page");
}else if(req.url=="/about"){
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end("About Page");
}else if(req.url=="/contact"){
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end("Contact Page");
}
}).listen(8080);