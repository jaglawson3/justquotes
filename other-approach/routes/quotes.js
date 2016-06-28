var express = require('express');
var router = express.Router();
var databaseConnection = "";

// Read
router.get('/:id', function(req, res, next) {
    databaseConnection.find().then(function(data){
        res.render("quote", data)
    });
});

// List
router.get('/', function(req, res, next) {
    databaseConnection.find().then(function(data){
        res.render("quotes", data)
    });
});

// Create
router.post('/', function(req, res, next) {
    databaseConnection.add().then(function(data){
        res.redirect("quotes")
    });
});

// Add page
router.get('/add', function(req, res, next) {
    res.render("new-quote")
});

module.exports = router;
