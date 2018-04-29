var express = require('express');
var itemController = require('./controllers/item_search_controller');
var searchController = require('./controllers/search_criteria_controller');
var app = express();



//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'))

//fire controllers
itemController(app);
searchController(app);





app.listen(3000);
console.log("Now listening on port 3000")
