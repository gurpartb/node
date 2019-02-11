var fs = require('fs');
var zlib = require('zlib'); // Helps us create a compressed file

// 1. Empyt out greetcopy.txt
// 2. Ceate greet.txt.gz
// 

var readable = fs.createReadStream(__dirname + '/greet.txt'/*, {encoding: 'utf8', highWaterMark: 1024}*/);

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

// readable.on('data', function(chunk){
//     console.log(chunk);
//     writeable.write(chunk);
// });

// Piping does the same thing we did above
readable.pipe(writeable);

// method chaining, gzip is not a file, it does a job (compresses)
readable.pipe(gzip).pipe(compressed);

