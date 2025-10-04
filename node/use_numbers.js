// Import numbers.js using commonjs module system
var nm = require("./numbers")

console.log(nm)
console.log(nm.isEven(10))

console.log(__filename, __dirname)