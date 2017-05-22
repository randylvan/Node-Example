var http = require("http");
http.createServer( function(request, response) {
    response.writeHead( 200, {'Content-Type': 'text/plain'});
    response.end("my first node app\n");
}).listen(8080);
console.log('Server running at http://localhost:8080');
