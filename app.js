
var http = require('http')

var server = http.createServer(function(request,response) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end("Hello from Node")
})

server.listen(80)
