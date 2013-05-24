var fortunes = [
  "Have a nice day",
  "You look really good today",
  "It's your birthday!",
  "Never play leapfrog with a unicorn"
];

var net = require('net');
var server = net.createServer(function(connection){
  connection.write("Enter the number of fortunes you want: ");
  connection.on('data', function(data){
    var num_fortunes = parseInt(data, 10);
    if(isNaN(num_fortunes)) {
      connection.write("That's not a number, silly." + "\n");
      connection.end();
    } else if(num_fortunes > 4) {
      connection.write("You're too greedy. Ask for fewer fortunes next time." + "\n");
      connection.end();
    } else if(num_fortunes < 1) {
      connection.write("You need to ask for more than 0." + "\n");
      connection.end();
    } else {
      for(var i = 0; i < num_fortunes; i += 1) {
        var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        connection.write(fortune.toString() + "\n");

        // connection.write(fortunes[i] + "\n");

      }
      connection.end();
    }
    connection.on('error', function(){});
  });
});

server.listen(1234);

// var fortunes = ["alpha", "bravo", "tango", "lima", "november", "zulu"];

// var net = require('net');
// var server = net.createServer(function(connection){
//   connection.write("Enter the number of fortunes you want:");
//   connection.on('data', function(data){
//     var num_fortunes = parseInt(data, 10);
//     if(isNaN(num_fortunes)) {
//       conneciton.write("Thats not a number silly")
//       connection.end();
//     }
//     if(num_fortunes > 4) {
//       connection.write("You're too greedy. Ask for few fortunes next time.")
//       connection.end();
//     } else {
//       for(var i = 0; i < num_fortunes; i += 1) {
//       connection.write(fortunes[i]);
//       }
//       connection.end();
//     }
//     connection.on('error', function(){});
//   });
// });

// server.listen(1234);