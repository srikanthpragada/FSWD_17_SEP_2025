const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names.txt", "utf-8")
console.log(new Date())

p.then (data => console.log(data))                  // fulfilled 
 .catch(error => console.log('Error :' + error))    // reject
 .finally( () => console.log("Done!"))

console.log("The End!")




