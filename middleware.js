var express = require('express');
var app = express();
app.use((req,res,next)=>{
    console.log("start");
    next();
});
app.get('/',(req,res) => {
    res.send("middlee");
    next();
});
app.use('/',(req,res)=>{
    console.log("end");
});
app.listen(8080,function(){
    console.log('Server Running here');
})