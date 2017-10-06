var path    = require("path");
var app     = require("express");

app.use(express.static(__dirname + '/build/static'));

exports.http = (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/build/index.html'));
};
