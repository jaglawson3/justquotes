const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://admin:password@ds023644.mlab.com:23644/just-quotes', function(err, database) {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3001, () => {
    console.log('listening on 3001')
  })
})

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/views",express.static(__dirname + "/views"));

console.log("server is running")

app.get('/', function(req, res) {
  var cursor = db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  res.render('index.ejs', {quotes: results})
  })
})

app.get('/:id', function(req, res) {
  var cursor = db.collection('quotes').find().toArray(function(err, results) {
    res.render(req.params.id + '.ejs', {quotes: results})
  })
})

app.post('/quotes', function(req, res) {
  db.collection('quotes').save(req.body, function (err, results) {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
