var greeting = 'Hello world!!!!'

// We are not exposing the 'greeting' variable
// caller has no abilit to change the greeting variable
// as compared to greet3 and greet4.
// 'greeting' private/ hidden variable
function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}