var path    = require("path");

exports.http = (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/build/index.html'));
};
