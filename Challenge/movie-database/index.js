var express = require("express");
var app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://William:develwer@cluster0-sxlgp.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }
);

const Movie = require("./Movies")
// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://William:<password>@cluster0-sxlgp.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const userSchema = mongoose.Schema({
//   title:String,
//   ratig:String,
//   :String,
//   country:String
// });
// module.exports = mongoose.model('User',userSchema);


app.get("/test", function (req, res) {
  res.send({ status: "200", message: "ok" });
});

app.get("/time", function (req, res) {
  res.send({ status: "200", message: time });
});

app.get(`/hello/:tagId?`, function (req, res) {
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

app.get("/search", function (req, res) {
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

app.get("/movies/create", function (req, res) {
  TITLE = req.query.title;
  YEAR = req.query.year;
  RATING = req.query.rating;



  x = RATING ? RATING : 4;

  if (
    TITLE != undefined ||
    YEAR != undefined ||
    YEAR != NAN ||
    YEAR.length != 4
  ) {
    a = new Movie({
      _id: new mongoose.Types.ObjectId(),
      title: TITLE,
      year: YEAR,
      rating: x
    })
    a.save()
      .then(result => {
        console.log(result);
      }).catch(err => console.log(err))
    res.send(Movie);


  } else {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  }
});

app.get("/movies/read/:TAGID?/:ID?", function (req, res) {
  TAG = req.params.TAGID;
  id = req.params.ID;

  if (TAG == "by-date") {

    Movie.find().sort({ year: 1 }).then((data => {
      res.send({ sorteddate: data })
    }))
  } else if (TAG == "by-rating") {
    Movie.find().sort({ rating: 1 }).then((data => {
      res.send({ sortedRate: data })
    }))
  } else if (TAG == "by-title") {

    Movie.find().sort({ title: 1 }).then((dat => {
      res.send({ s: dat })
    }))
  } else if (TAG === "id") {
    Movie.findById(id)
      .then((doc => {
        console.log(doc)
        res.send({ data: doc });
      }))
  } else {
    Movie.find({}, function (err, movies) {
      res.send({ movies: movies })
    }).catch(err => console.log(err))
  }
});

app.get("/movies/update/:id", function (req, res) {
  ID = req.params.id;

  TITLE = req.query.title;
  YEAR = req.query.year;
  RATING = req.query.rating;

 

  Movie.findById(ID)((async num => {
     
    
    
    await Movie.updateOne(
      { _id: num.id },

      { $set: { title: TITLE,
      year:YEAR,
      rating:RATING
      }}
      
    )
    res.send({ Data: num })
  }))


});


app.get("/movies/delete/:id", function (req, res) {
  ID = req.params.id;

  if (ID) {
    Movie.findById(ID).then((async data => {
      await data.remove(
        { _id: data }
      )
      res.send({ "Movies": Movie })
    }))
  }
});

app.listen(3000);

var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();
