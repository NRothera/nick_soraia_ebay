
var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/app/views/index.html'));
});

app.listen(8080);
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);
