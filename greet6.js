// exports and module.exports intially point to the same object.
// When we set exports to something else, that refrence is broken,
// and exports now points to a new location in memory.
// Question is: What does require(...) return?
// Ans: require(..) returns object refrenced by module.exports

exports = function(){
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);