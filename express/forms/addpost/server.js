const express = require('express') // use express library
const path = require("path")
const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var bodyParser = require('body-parser')
// add middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Handle GET request 
app.get('/add',
    (req, res) => {
        res.render('add',
            {
                total: '',
                first: '',
                second: ''
            })
    }
)
// Handle POST request 
app.post('/add',
    (req, res) => {
        // Handle form submission 
        let total = parseInt(req.body.first) +
            parseInt(req.body.second)
        res.render("add",
            {
                total: total,   // result
                first: req.body.first,  // input
                second: req.body.second
            }
        )  // input
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)