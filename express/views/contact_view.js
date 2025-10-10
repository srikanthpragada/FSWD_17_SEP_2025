const express = require('express') // use express library
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views','./templates')

app.get('/contact',
    (req, res) => {
         res.render('contact', // ./templates/contact.ejs 
              { 
                email  : 'contact@srikanthtechnologies.com',
                mobile : '905905700'
              }
         )   
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})