var net = require('net');

var server = net.createServer(function(connection){
  console.log("somebody asked me what time it is");
  var date = new Date();
  connection.write(date.toString() + "\n");
  connection.end();
  connection.on('error', function(){});
});

console.log("server about to start listening");

server.listen(13);


//netcat localhost 13