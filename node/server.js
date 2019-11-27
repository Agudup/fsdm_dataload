/*eslint no-console: 0*/
"use strict";

var http = require("http");
var port = process.env.PORT || 3001;

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});

  res.end("Hello Africa\n");

}).listen(port);

console.log("Server listening on port %d", port);

