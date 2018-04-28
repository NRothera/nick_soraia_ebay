var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')
var port = 8888;

var urlencodedParser = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    var data = {age: 24, search: "nintendo"};
    res.render('index', {data: data, name: req.params.name});
});

app.get('/index', function(req, res) {
    res.render('index')
});

app.post('/index', urlencodedParser, function(req, res){
  // var searchedItem = req.body;
  // var itemArray = searchedItem.split(" ");
  // var joinedWithAnd = itemArray.join(",", "&")

  res.render('item-search', {data:req.body} );
});


// app.get('/', function(req, res) {
//     res.render('items');
// });

app.listen(8888);
console.log("Now listening on port " + port);
