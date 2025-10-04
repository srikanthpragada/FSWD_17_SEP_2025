const fs = require('fs')

fs.writeFile("./files/async/test.txt", 
    "This is first line\nThis is second line!",
    (error) => {
    if (error)
        throw error;
    console.log("Create file Successfully")
})