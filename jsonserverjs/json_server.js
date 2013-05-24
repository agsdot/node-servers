var http = require("http");

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "application/javascript"});

  var data = 'callback([{"title": "Monday", "value": 11 }, {"title": "Tuesday", "value": 2 }, {"title": "Wednesday", "value": 1 }, {"title": "Thursday", "value": 1 }, {"title": "Friday", "value": 1 }, {"title": "Saturday", "value": 0 }, {"title": "Sunday", "value": 8 } ])'
  response.write(data);
  response.end();

});


server.listen(1234);



