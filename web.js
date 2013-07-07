var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var html = fs.readFileSync('index.html', 'utf-8');

console.log("Html " + html);

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
