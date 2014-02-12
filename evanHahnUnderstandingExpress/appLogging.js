var connect = require("connect");
var http = require("http");
var app = connect();

//logging middleware
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

//Send "hello world"
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type" : "text/plain"});
  response.end("Hello World\n");
});

app.listen(1337);
