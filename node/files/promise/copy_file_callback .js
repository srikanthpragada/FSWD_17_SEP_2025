const fs = require("fs")
fs.readFile(__dirname + "/names.txt", "utf-8",
    (error, data) => {
        if(error)
            throw error;

        console.log("Read file!")
        fs.writeFile(__dirname + "/names2.txt", data, 
          (error) => {
            if(error)
                console.log("Error while writing!")
            else 
              console.log("Copied!!!")
        }
    ) // writing  
    }
)





