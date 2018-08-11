var express = require('express');
var searchController = require('./controllers/search_criteria_controller');
var app = express();
var search = require('./public/scripts/return_search_api');
search.scheduleSearch()
//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
searchController(app);

app.listen(8989);
console.log("Now listening on port 8989")