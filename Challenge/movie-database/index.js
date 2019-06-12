var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("<h1>ok</h1>");
});
app.get("/test", function(req, res) {
  res.send({ status: "200", message: "ok" });
});

app.get("/time", function(req, res) {
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

app.get("/search", function(req, res) {
  var s = req.query.s;
  if (s !== "") {
    res.send({ status: 200, message: "ok", data: s });
  } else {
    res.send({
      status: "500",
      error: "true",
      message: "you have to provide a search"
    });
  }
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

//CRUD ROUTES---------------

app.get("/movies/create", function(req, res) {});

app.get("/movies/read/:TAGID?/:ID?", function(req, res) {
  TAG = req.params.TAGID;
  id = req.params.ID
  
  if (TAG == "by-date") {
    res.send({
      status: "200",
      data: movies.sort(function(a, b) {
        return a.year - b.year;
      })
    });
  }
  
  else if (TAG == "by-rating") {
    res.send({
      status: 200,
      data: movies.sort(function(a, b) {
        return a.rating - b.rating;
      })
    });
  }

   else if (TAG == "by-title") {
    res.send({
      status: 200,
      data: movies.sort(function(a, b) {
        var x = a.title;
        var y = b.title;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      })
    });
  }

  if(TAG == "id" && id < movies.length){
    res.send(movies[id])
  }else{
    res.status(404).send({status:404, error:true, message:`the movie ${id} does not exist`})
  }
  

});

app.get("/movies/update", function(req, res) {});

app.get("/movies/delete", function(req, res) {});

app.listen(3000);

var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();
