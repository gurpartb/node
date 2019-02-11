// The node event emitter
// Build our own
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, somone said hello.');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);