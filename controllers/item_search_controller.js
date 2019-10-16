var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var urlencodedParser = bodyParser.urlencoded({extended:false});
var filteredApi = require('../public/scripts/return_search_api')

// Connecting to the database
// mongoose.connect("mongodb://ebayTest:ebayTest1@ds261929.mlab.com:61929/ebay-db")

var todoSchema = new mongoose.Schema({
  item: String
});


module.exports = function(app, filteredResult) {

  app.get('/', function(req, res) {

    // var result = filteredApi.getAndFilterApi();
    console.log("hello this is the result")
      console.log(filteredResult)
      res.render('index', {result: filteredResult});
  });

  app.post('/item_search', urlencodedParser, function(req, res){
    // var searchedItem = req.body;
    // var itemArray = searchedItem.split(" ");
    // var joinedWithAnd = itemArray.join(",", "&")
    res.render('item_search', {data:req.body} );
  });
};
