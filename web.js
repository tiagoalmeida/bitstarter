var express = require('express');

var app = express.createServer(express.logger());

var html = fs.readFileSync('index.html').toString;

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
