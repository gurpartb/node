var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});
// with apply you can pass array of parameters
obj.greet.apply({name: 'Jane Doe'});