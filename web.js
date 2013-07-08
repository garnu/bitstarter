var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file_content = fs.readFileSync('index.html');
  response.send(file_content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
