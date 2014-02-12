var connect = require("connect");
var http = require("http");
var app = connect();

app.use(connect.logger());
//fun fact: connect.logger() returns a function.

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type" : "text/plain" });
  response.end("Hello World!\n");
});

http.createServer(app).listen(1337);
