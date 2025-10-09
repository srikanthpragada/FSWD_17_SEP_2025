const express = require('express') // use express library
const app = express()
const port = 3000

app.get('/contact',
    (req, res) => {
         res.send(`<h1>Email : contact@srikanthtechnologies.com<br/>Mobile : 9059057000 </h1>`)
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})