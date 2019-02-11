// deal with file systems
var fs = require('fs');

// second parameter is optional, its 'utf8' by default
// synchronous way of reading a file
var greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8');
console.log(greet);

// ReadFile takes in a callback function as a parameter.
// First parameter of call back is an error by standard,
// for asynchronous function
var greet2 = fs.readFile(__dirname+'/greet.txt', function(err, data){
    console.log(data);
});

// utf8 parameter will conver buffer to a string
var greet3 = fs.readFile(__dirname+'/greet.txt', 'utf8', function(err, data){
    console.log(data);
});

// greet2 and greet3 are run asynchronously.
// While program is fetching data for the function above,
// line below is executed.
console.log('Done!')

// Lesson when ever there is a choice, lean over to use
// asynchronous method, it'll ensure better user experiece
// for the user/ customer.