var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var urlencodedParser = bodyParser.urlencoded({extended:false});

// Connecting to the database
// mongoose.connect("mongodb://ebayTest:ebayTest1@ds261929.mlab.com:61929/ebay-db")

var todoSchema = new mongoose.Schema({
  item: String
});


module.exports = function(app) {

  app.get('/', function(req, res) {
      var data = {age: 24, search: "nintendo"};
      res.render('index', {data: data, name: req.params.name});
  });

  app.post('/item_search', urlencodedParser, function(req, res){
    // var searchedItem = req.body;
    // var itemArray = searchedItem.split(" ");
    // var joinedWithAnd = itemArray.join(",", "&")
    res.render('item_search', {data:req.body} );
  });
};
