var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var urlencodedParser = bodyParser.urlencoded({extended:false});
var sendMail = require('../public/scripts/sendMail')
var storeResults = require('../public/scripts/write_to_results')

// Connecting to the database
// mongoose.connect("mongodb://ebayTest:ebayTest1@ds261929.mlab.com:61929/ebay-db")

var todoSchema = new mongoose.Schema({
  item: String
});

module.exports = function(app, filteredResult, countries) {
  app.get('/', function(req, res) {
    sendMail("hello");

    var newResultsOrEmpty = storeResults.write_to_results_if_new_item(filteredResult, countries);
    // if (newResultsOrEmpty.length != 0){
      // console.log("There are differences")
    // }
    // console.log("This is the result" + filteredResult)

      res.render('index', {result: filteredResult, countries: countries});

  });
  app.post('/item_search', urlencodedParser, function(req, res){
    // var searchedItem = req.body;
    // var itemArray = searchedItem.split(" ");
    // var joinedWithAnd = itemArray.join(",", "&")
    res.render('item_search', {data:req.body} );
  });
};
