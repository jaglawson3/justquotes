var express = require('express')
var bodyParser= require('body-parser')
var app = express()
var MongoClient = require('mongodb').MongoClient
var dotenv = require('dotenv').config({path:".env"});

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

function buildConnectionString() {
  var protocol = "mongodb://"
  var userName = process.env.USERNAME
  var password = process.env.PASSWORD1
  var host = "ds023644.mlab.com"
  var port = "23644"
  var path = "just-quotes"
  return [
     protocol,
     userName, ":", password,
     "@", host, ":",
     port, "/", path
  ].join("")
}

// var connectToDatabase = new Promise(function(resolve, reject){
//     MongoClient.connect(buildConnectionString(), function(err, dbc) {
//         if (error){
//             reject(error)
//         } else {
//             resolve(dbc)
//         }
//     })
// })
//
// var listenForRequests = new Promise(function(resolve, reject){
//     app.listen(PORT || 3001, () => {
//         const PORT = process.env.PORT || 3001
//         resolve(console.log(['listening on', PORT, "Yo!"].join(" ")))
//     })
// })

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/views",express.static(__dirname + "/views"));

MongoClient.connect(buildConnectionString(), function(err, database) {
    if (err) return console.log(err)
    db = database
    app.listen(process.env.PORT || 3001, () => {
        console.log('listening on ' + process.env.PORT)
    })
})


app.get('/', function(req, res) {
    var cursor = db.collection('quotes').find().toArray(function(err, data) {
        res.render('index',{quotes: data})
    })
})

app.get('/:id', function(req, res) {
    var cursor = db.collection('quotes').find().toArray(function(err, data) {
      var index = req.params.id-1
      res.render(req.params.id + '.ejs', {quotes: data})
    })
})

app.get('/admin', function(req, res) {
    res.render('admin')
})

app.post('/quotes', function(req, res) {
    db.collection('quotes').save(req.body, function (err, results) {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/quotes')
        })
    })
