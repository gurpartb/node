var firstname = 'Jane';

// Immediatel Invoked Function Expression
// Its an expression and not just a function
(function(lastname){
    // This is a local variable, therefore local scope
    var firstname = 'Gurpartap';
    console.log(firstname);
    console.log(lastname)
}('Bhatti'));

console.log(firstname)