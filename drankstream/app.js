var server = require('http').createServer(serveFile);
var fs = require('fs');
var ntwitter = require("ntwitter");
var io = require('socket.io').listen(server);

function serveFile(request, response){
  fs.readFile(__dirname + '/index.html', function(error, data){
    if(error) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write("<html><body>No drank for you!</body></html>");
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
    }
    response.end();
  });
}

var client = new ntwitter({
  consumer_key: process.env["TWITTER_CONSUMER_KEY"],
  consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
  access_token_key: process.env["TWITTER_ACCESS_TOKEN"],
  access_token_secret: process.env["TWITTER_ACCESS_SECRET"]
});

var coffee, tea, wine, beer, water;
coffee = tea = wine = beer = water = 0;
var items = ["coffee", "tea", "wine", "beer", "water"];

io.sockets.on('connection', function(socketIoSocket){
  socketIoSocket.on("error", function(error) {
    console.log(error);
  });
  client.stream("statuses/filter", {"track": items.join(',')}, function(twitterSocket){
    twitterSocket.on("error", function(error){
      console.log(error);
    });
    twitterSocket.on("data", function(tweet){
      if(tweet.text.match(/coffee/i)) {
        coffee += 1;
        socketIoSocket.emit('coffee', {"count": coffee});
      }
      if(tweet.text.match(/tea/i)) {
        tea += 1;
        socketIoSocket.emit('tea', {"count": tea});
      }
      if(tweet.text.match(/wine/i)) {
        wine += 1;
        socketIoSocket.emit('wine', {"count": wine});
      }
      if(tweet.text.match(/beer/i)) {
        beer += 1;
        socketIoSocket.emit('beer', {"count": beer});
      }
      if(tweet.text.match(/water/i)) {
        water += 1;
        socketIoSocket.emit('water', {"count": water});
      }
    });
  });
});

server.listen(1234);