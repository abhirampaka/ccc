//BUILT-IN URL MODULE
//Split a web address into readable parts:
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=march';
var q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);

// output
// localhost:8080
// /default.htm
// ?year=2020&month=march
// march
// 2020

