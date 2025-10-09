const express = require('express') // use express library
const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.set('views','./templates')

app.get('/contact',
    (req, res) => {
         res.render('contact', // ./templates/contact.ejs 
              { 
                email  : 'info@srikanthtechnologies.com',
                mobile : '905905700'
              }
         )  
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})