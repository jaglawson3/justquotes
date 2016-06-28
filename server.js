const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

function buildConnectionString(){
    var protocol = "mongodb://"
    var userName = "admin"
    var password = "password"
    var host = "ds023644.mlab.com"
    var port = "23644"
    var path = "just-quotes"
    return [
        protocol,
        userName, ":", password,
        "@", ":",
        port, "/", path
    ].join("")
}

var connectToDatabase = new Promise(function(resolve, reject){
    MongoClient.connect(buildConnectionString(), function(err, dbc) {
        if (error){
            reject(error)
        } else {
            resolve(dbc)
        }
    })
})

var listenForRequests = new Promise(function(resolve, reject){
    app.listen(PORT || 3001, () => {
        const PORT = process.env.PORT || 3001
        resolve(console.log(['listening on', PORT, "Yo!"].join(" ")))
    })
});

Promise.all([
    connectToDatabase,
    listenForRequests
]).then(function(promiseResults){
    const databaseConnection = promiseResults[0]
    app.use("/styles", express.static(__dirname + "/styles"))
    app.use("/views", express.static(__dirname + "/views"))

    app.get('/', function(req, res) {
        var cursor = databaseConnection.collection('quotes').find().toArray(function(err, results) {
            res.render('index.ejs', {quotes: results})
        })
    })

    app.get('/:id', function(req, res) {
        var cursor = db.collection('quotes').find().toArray(function(err, results) {
            res.render(req.params.id + '.ejs', {quotes: results})
        })
    })

app.get('/admin', function(req, res) {
  res.render('admin.ejs')
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
