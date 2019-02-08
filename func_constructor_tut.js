function Person(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
}
// prototype of any object created from person
Person.prototype.greet = function(){
    console.log('Hello, '+this.firstname+ ' '+this.lastname)
}
 var g = new Person('Gurpartap', 'Bhatti')
 g.greet()
 console.log(g.firstname)

 var jane = new Person('Jane', 'Doe')
 jane.greet()

 // Shows all atrributes of an object
 console.log(g.__proto__)
 console.log(jane.__proto__)

 // Are they the same object prototype
 console.log(g.__proto__===jane.__proto__)