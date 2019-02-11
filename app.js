// adding thisline to the top of javascript file or a function
// means that javascript engine is pickier about this it lets 
// you doesnt let you do. Helps us not make silly mistake.
// important to use in production code.
'use strict';

// combines function constructor
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello, '+this.firstname+ ' '+this.lastname)
    };
}

 var g = new Person('Gurpartap', 'Bhatti');
 g.greet();

 var jane = new Person('Jane', 'Doe');
 jane.greet();

 console.log(g.__proto__)
 console.log(jane.__proto__)
 console.log(g.__proto__===jane.__proto__)