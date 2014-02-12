var connect = require("connect");
var http = require("http");
var app = connect();

app.use(connect.logger());

//Homepage
app.use(function(req, resp, next) {
  if (req.url === "/") {
    resp.writeHead(200, { "Content-Type" : "text/plain" });
    resp.end("Welcome to the homepage!\n")
    //the middlware stops here
  } else {
    next();
  }
});

// About
app.use(function(req, resp, next) {
  if (req.url === "/about") {
    resp.writeHead(200, { "Content-Type" : "text/plain" });
    resp.end("Welcome to the about page!\n")
    //the middlware stops here
  } else {
    next();
  }
});

// 404'd!
app.use(function(req, resp) {
  resp.writeHead(404, { "Content-Type" : "text/plain" });
  resp.end("404 error!\n")
});

http.createServer(app).listen(1337);

