var express = require("express");
var http = require("http");
var app = express();

app.use(express.logger());

app.all("*", function(request, response, next) {
  response.writeHead( 200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/hello/:who", function(request, response) {
  response.end("Hello, " + request.params.who + ". And " + require('util').inspect(request.params) +  " which is request.params.");
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337);
