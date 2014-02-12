var http = require("http")

http.createServer(function(req, res) {

  //homepage
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type" : "text/html"});
    res.end("Welcome to the homepage!");
  }

  //about page
  else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type" : "text/html"});
    res.end("Welcome to the About Page!");
  }

  // 404'd!
  else {
    res.writeHead(200, { "Content-Type" : "text/plain"});   
    res.end("404 error! File not found.");
  }  

}).listen(1337, "localhost");
console.log("Server running at http://localhost:1337")
