// The node event emitter
// Build our own
var Emitter = require('./emitter2');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, somone said hello.');
});

emtr.on('greet', function(){
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');
