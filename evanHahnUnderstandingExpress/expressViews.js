//Start Express
var express = require("express");
var app = express();

//Set the view directory to /views
app.set("views", __dirname + "/views");

//Let's use the Jade templating language
app.set("view engine", "jade");

app.get("/", function(request, response) {
  response.render("index", { message: "I love anime"});
});

app.listen(1337);
