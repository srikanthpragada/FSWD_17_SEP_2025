const express = require('express') // use express library
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views','./templates')

app.get('/jobs',
    (req, res) => {
         res.render('job',
              { 
                title : 'Front-end Developer',
                skills : ['HTML', 'BOOTSTRAP', 'REACT']
              }
         )  // ./templates/jobs.ejs 
    }
)
 
app.listen(port, () => {
       console.log(`Server listening on port ${port}`)
})