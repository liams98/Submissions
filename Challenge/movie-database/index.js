var express = require("express")
var app = express()

app.get('/',function(req, res, next){
    res.send('<h1>ok</h1>')
})
app.get('/test',function(req,res){
    res.send({'status':"200", "message":"ok"})
})

app.get('/time', function(req,res){
    res.send({'status':"200", "message": time})
})
app.listen(3000);

var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();