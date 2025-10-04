const fs = require("fs")


let filename = __dirname + "/names.txt"
console.log("About to read file : " + filename)

fs.readFile(filename, "utf-8",
    (err, data) => {
        if (err)
            console.log("Error " + err.message)
        else {
            console.log("Completed reading and about to write...")
            // write to names2.txt
            fs.writeFile(__dirname + "/names2.txt", data,
                     () => console.log("Copied!"))
        }
    })

console.log(new Date())


