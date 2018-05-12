var bodyParser = require('body-parser');
var mongoose = require('mongoose')

// Connecting to the database
mongoose.connect("mongodb://ebayTest:ebayTest1@ds261929.mlab.com:61929/ebay-db")

var itemSearchSchema = new mongoose.Schema({
  item: String
});

var ItemSearch = mongoose.model('ItemSearch', itemSearchSchema);
// var itemone = ItemSearch({item: 'Nintendo 64'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app) {

  app.get('/search', function(req, res) {
    ItemSearch.find({}, function(err, data){
    if (err) throw err;
    res.render('search', {itemSearches: data});

    });
  });

  app.post('/search', urlencodedParser, function(req, res){
    // get data from the view, add it to mongodb
    var newItemSearch = ItemSearch(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/search/:item', function(req, res){
  //delete requested item from mongodb
    ItemSearch.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });
};
