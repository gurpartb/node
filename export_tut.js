var greet = require('./greet1');
greet();

// var greet2 = require('./greet2');
// greet2.greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
// console.log(greet3.greeting)
greet3.greet();
greet3.greeting = 'Change hello world!';

// Will this have the same object as greet3
// or will it have a new instance !?
// lets test it
var greet3b = require('./greet3');
greet3b.greet();
// conclusion: greet3b refrences same object as greet3

// The fix in 'greet4' we export the 'constructor' function
// that'll enable us to create a new instance as we please
var Greet4 = require('./greet4');
// Greet4 is a consctuructor function
var grtr = new Greet4();
grtr.greet();

// Lesson: if you want to provide the user with ability create
// multiple instances of an abject, simply export the constructor
// function

var greet5 = require('./greet5').greet;
greet5();


// Manipulating export and module.export
var greet6 = require('./greet6.js');
greet6;