var net = require('net');

var connections = [];

var server = net.createServer(function(connection){
  connections.push(connection);
  connection.on('data', function(whatSomeoneTyped){
    for(var i = 0; i < connections.length; i += 1) {
      if(connections[i] !== connection) {
        connections[i].write(whatSomeoneTyped);
      }
    }
  });
  connection.on('end', function(){
    var myConnection = connections.indexOf(connection);
    connections.splice(myConnection, 1);
  });
});

server.listen(1234);