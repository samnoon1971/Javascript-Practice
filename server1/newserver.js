var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Contenty-type': 'text/plain'});
    res.write('Hello world');
    res.end();

});
server.listen(1000);