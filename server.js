var express = require('express');
var schedule = require('node-schedule');
var itemController = require('./controllers/item_search_controller');
var searchController = require('./controllers/search_criteria_controller');
var app = express();
var search = require('./public/scripts/return_search_api');

var countryList = ["AU", "FR", "ES", "GB", "US"]
//  var rule = new schedule.RecurrenceRule();

//   rule.minute = new schedule.Range(0, 59, 5);

//    schedule.scheduleJob(rule, exports.scheduleSearch = (function() {

 var filtered_result = search.getAndFilterApi(countryList);


    // })();    

//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'))
// app.use('/scripts', express.static(__dirname + '/public/'));
//fire controllers
itemController(app, filtered_result, countryList);
searchController(app);
if (false) {


}


app.listen(process.env.PORT || 8989, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  