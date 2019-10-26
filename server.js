var express = require('express');
var schedule = require('node-schedule');
var itemController = require('./controllers/item_search_controller');
var searchController = require('./controllers/search_criteria_controller');
var app = express();
var search = require('./public/scripts/return_search_api');
var storeResults = require('./public/scripts/write_to_results')

//  var rule = new schedule.RecurrenceRule();

//   rule.minute = new schedule.Range(0, 59, 5);

//    schedule.scheduleJob(rule, exports.scheduleSearch = (function() {

 var filtered_result = search.getAndFilterApi(["AU", "FR", "ES", "GB", "US"]);

 storeResults.write_to_results(filtered_result);
    // })();    

//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'))
// app.use('/scripts', express.static(__dirname + '/public/'));
//fire controllers
itemController(app, filtered_result);
searchController(app);



app.listen(8989);
console.log("Now listening on port 8989")
