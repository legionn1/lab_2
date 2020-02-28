const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.text());

app.listen(8080);
let mass = ["text", "text"];

app.get("/list", function(req, res) {
  res.send(mass.join(", "));
  res.end();
});

app.post("/create", function(req, res) {
  mass.push(req.body);
  res.send(mass);
  res.end();
});
