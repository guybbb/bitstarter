var express = require('express');
var path = require('path');

var app = express.createServer(express.logger());

app.use(express.static(__dirname+'/public'));

/*app.get('/', function(request, response) {
    var fs = require("fs");
    content = fs.readFileSync('index.html');
    response.send(content.toString('utf-8'));
});*/


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
