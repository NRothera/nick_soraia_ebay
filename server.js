var http = require('http');

var port = 8888;

var server = http.createServer(function(req, res) {
  console.log("Request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(port);
console.log("Now listening on port " + port);
