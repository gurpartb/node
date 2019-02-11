// deal with file systems
var fs = require('fs');

// second parameter is optional, its 'utf8' by default
// synchronous way of reading a file
var greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8');
console.log(greet);

// readFile takes in a callback function as a parameter
var greet2 = fs.readFile(__dirname+'/greet.txt', function(err, data){
});