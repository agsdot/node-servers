//require the stuff we need
var connect = require("connect");
var http = require("http");

//build the app
var app = connect();

//add some middleware

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain"});
  response.end("Hello World!\n")
});

//start it up

//http.createServer(app).listen(1337);
//app.listen(1337);
//
//either of http.createServer(app).listen or app.listen can be used

app.listen(1337);
