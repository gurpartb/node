var person = {
    firstname: 'Gurpartap',
    lastname: 'Bhatti',
    greet: function(){
        console.log('Hello, '+ this.firstname+' '+this.lastname)
    }
}

person.greet()

person['greet']()

console.log(person['firstname'])