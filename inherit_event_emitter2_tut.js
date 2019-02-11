// This (and Greetr.js) file are a modified from inherit_event_emitter.js
// main difference is 'use stritct', to enforce ES6 standards
'use strict'

var Greetr = require('./greetr')

var greeter1 = new Greetr();

// on comes from EventEmitter
greeter1.on('greet', function(data){
    console.log('Someone greeted!: '+data);
} );

greeter1.greet('Tony');