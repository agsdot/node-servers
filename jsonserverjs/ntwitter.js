var ntwitter = require('ntwitter');

var client = new ntwitter({
  consumer_key: 'Twitter',
  consumer_secret: 'API',
  access_token_key: 'keys',
  access_token_secret: 'go here'
});

client.stream('statuses/sample', function(stream){

});