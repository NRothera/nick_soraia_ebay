var http = require('http');
var url = require('url');
var querystring = require('querystring');

const express = require('express');
const app = new express();

// var server = http.createServer(function(req, res) {
    // var params = querystring.parse(url.parse(req.url).query);
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // if ('firstname' in params && 'lastname' in params) {
    //     res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
    // }
    // else {
    //     res.write("You do have a first name and a last name, don't you?");
    // }
    // res.end();
// });



// var server = http.createServer(function(req, res) {
  // res.writeHead(200);
  // res.end('Hi everybody!');
  // res.sendfile('index.html');
// });

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.listen(8888);
