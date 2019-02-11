var EventEmitter = require('events');
var util = require('util');


// 'this' keyword for the object being created
function Greetr(){
    // super constructor, constructor of object
    // i'm inheriting from
    EventEmitter.call(this)
    this.greeting = 'Hello world!';
}

// This line gave me access to any object,
// I created using new Greetr()
// setup the prototype chain
util.inherits(Greetr, EventEmitter);

var greet = 'greet'

// Greetr.prototype.greet = function(){
//     console.log(this.greeting);
//     // emit comes from EventEmitter
//     this.emit(greet);
// }
Greetr.prototype.greet = function(data){
    console.log(this.greeting+': '+data);
    // emit comes from EventEmitter
    this.emit(greet, data);
}

var greeter1 = new Greetr();

// on comes from EventEmitter
greeter1.on(greet, function(data){
    console.log('Someone greeted!: '+data);
} );

greeter1.greet('Tony');