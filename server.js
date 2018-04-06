var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');
var port = 8888;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/items', function(req, res) {
    res.render('items');
});

app.listen(8888);
console.log("Now listening on port " + port);
