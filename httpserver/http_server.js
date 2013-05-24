var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!doctype html><html><body>\n");
  response.write("Hello, \n");
  setTimeout(function(){
    response.write("World\n");
    response.write("</body></html>\n");
    response.end();
  }, 5000);
});

server.listen(80);