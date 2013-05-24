var net = require('net');
var fortunes = ["alpha", "bravo", "tango", "lima", "november", "zulu"];

var server = net.createServer(function(connection){
  console.log("So you wanna know yo fortune, eh? Type in a number.");
  var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  connection.write(fortune.toString() + "\n");
  connection.end();
  connection.on('error', function(){});

});

console.log("server about to start listening");


server.listen(1234);


//var favorites = ["http://google.com", "http://yahoo.com", "http://msn.com", "http://apple.com"];
//var favorite = favorites[Math.floor(Math.random() * favorites.length)];

//var fortunes = ["alpha", "bravo", "tango", "lima", "november", "zulu"];
//var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];