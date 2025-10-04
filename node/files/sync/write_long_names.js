const fs = require("fs")

const data = fs.readFileSync(__dirname + "/names.txt", "utf-8");
let names = data.split("\n")
console.log(names)

let longnames = ""
for(let name of names)
{
    if (name.length >= 5)
        longnames += name + "\n"
}

fs.writeFileSync(__dirname + "/longnames.txt", longnames)




