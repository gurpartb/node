// This file is a modified from inherit_event_emitter.js
// main difference is 'use stritct', to enforce ES6 standards
'use strict'

var EventEmitter = require('events');
// var util = require('util');

module.exports = class Greetr extends EventEmitter{
    constructor(){
        // need super constructor before you can 'this'
        super()
        this.greeting = 'Hello world!';
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        // emit comes from EventEmitter
        this.emit('greet', data);
    };
};

// no longer need this, inheritance is complete above
// util.inherits(Greetr, EventEmitter);