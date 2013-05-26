var ntwitter = require("ntwitter");

var client = new ntwitter({
 consumer_key: process.env["TWITTER_CONSUMER_KEY"],
 consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
 access_token_key: process.env["TWITTER_ACCESS_TOKEN"],
 access_token_secret: process.env["TWITTER_ACCESS_SECRET"]
});

var coffee, tea, wine, beer, water;
coffee = tea = wine = beer = water = 0;
var items = ["coffee", "tea", "wine", "beer", "water"];

client.stream("statuses/filter", {"track": items.join(',')}, function(connection){
 connection.on("data", function(tweet){
   if(tweet.text.match(/coffee/i)) {
     coffee += 1;
   }
   if(tweet.text.match(/tea/i)) {
     tea += 1;
   }
   if(tweet.text.match(/wine/i)) {
     wine += 1;
   }
   if(tweet.text.match(/beer/i)) {
     beer += 1;
   }
   if(tweet.text.match(/water/i)) {
     water += 1;
   }
   console.log("☕: " + coffee);
   console.log("🍵: " + tea);
   console.log("🍷: " + wine);
   console.log("🍺: " + beer);
   console.log("💧: " + water);
   var lines = process.stdout.getWindowSize()[1];
   for(var i = 0; i < lines - (items.length + 1); i += 1) {
     console.log("");
   }
 });
 connection.on("error", function(error){
   console.log(error);
 });
});
