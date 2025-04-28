//Http MOdule json response
var http = require("http");
http.createServer(function(request,response){
    const org = {
        name : "CCC",
        HeadOfc : "Hyd"
    };
    response.writeHead(200,{'content-type' : 'application/json'});
    response.write(JSON.stringify(org));
    response.end();
}).listen(8080);
console.log("hello");