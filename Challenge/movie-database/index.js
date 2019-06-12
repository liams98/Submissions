var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("<h1>ok</h1>");
});
app.get("/test", function(req, res) {
  res.send({ status: "200", message: "ok" });
});

app.get("/time", function(req, res) {
  console.log(req.query)
  res.send({ status: "200", message: time });
});

app.get(`/hello/:tagId?`, function(req, res) {
  let x = req.params.tagId;
  function check() {
    if (x == undefined) {
      return "";
    } else {
      return x;
    }
  }
  res.send({ status: "200", message: `hello,` + check() });
});

app.get("/search", function(req,res){
  var s = req.query.s
  if(s !== ""){
  res.send({status:200, message:"ok", data: s})
  }else{
    res.send({status:"500",error:"true",message:"you have to provide a search"})
  }
})

app.listen(3000);

var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();
