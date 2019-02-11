// Only if we are using vscode
// New feature in ES6, must ha jsconfig.json file
var name = 'John Doe';

var greet = 'Hello '+ name;

// use babeljs.io to convert this code for older version of js
var greet2 = `Hello ${name}`;

console.log(greet);
console.log(greet2);