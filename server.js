var express = require('express');
var itemController = require('./controllers/item_search_controller');
var app = express();



//set up template engine
app.set('view engine', 'ejs');
//static files
app.use('/assets', express.static('assets'));

//fire controllers
itemController(app);





app.listen(3000);
console.log("Now listening on port 3000")
