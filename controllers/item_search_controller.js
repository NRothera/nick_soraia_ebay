var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app) {

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

    res.render('item_search', {data:req.body} );
  });
};
