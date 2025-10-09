const express = require('express') // use express library
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './templates')

let jobs = [
     {
          title: 'Front-end Developer',
          skills: ['HTML', 'BOOTSTRAP', 'REACT']
     },
     {
          title: 'Back-end Developer',
          skills: ['SQL', 'Express.js']
     }
]

app.get('/jobs',
     (req, res) => {
          res.render('jobs', { jobs: jobs})
     }
)

app.listen(port, () => {
     console.log(`Server listening on port ${port}`)
})