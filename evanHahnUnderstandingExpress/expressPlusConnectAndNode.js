var express = require("express");
var app = express();

app.use(express.logger()); // Inherited from Connect

app.get("/", function(req, res) {
  res.send("anime");
});

app.listen(1337);

