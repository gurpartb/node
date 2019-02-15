var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/'){
        fs.createReadStream(__dirname+'/index.htm').pipe(res);
    } else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');

// createSever take in a callback function
// callaback fucntion happens to be an event listener
// req: incoming request, res: outgoing responce
// http.createServer(function(req, res){
    // http response begins with a head
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // var html = fs.readFileSync(__dirname+'/index.htm','utf8');
    // var message = 'Hello world...';
    // html = html.replace('{Message}', message);
    // res.end(html);
    // fs.createReadStream(__dirname + '/index.htm').pipe(res);

// }).listen(1337, '127.0.0.1');
// This program will grab any information that come in
// on above port address