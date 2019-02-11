// No need to use require for buffer, because its available globally
// Due to number of use cases

// var buf = new Buffer('Hello', 'utf8');
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2])

// New feature in java script
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);