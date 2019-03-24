var http = require('http');

var server = http.createServer(function(req,res){
    res.write("<h1>My first Node Server </h1>")
    res.end()
})

server.listen(4300);