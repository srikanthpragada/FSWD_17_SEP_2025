const express = require('express') // use express library
const path = require("path")
const app = express()
const port = 3000

// view engine setup
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/interest',
    (req, res) => {
        res.render('interest',
            {
                amount: '',
                rateFrom: '',
                rateTo: '',
                interests: null
            })
    }
)

app.get('/interestProcess',
    (req, res) => {
        let amount = req.query.amount
        let rateFrom = parseInt(req.query.rateFrom)
        let rateTo = parseInt(req.query.rateTo)

        let interests = []

        for (let rate = rateFrom; rate <= rateTo; rate++) {
            interests.push({
                amount : amount,
                rate : rate,
                interest : amount * rate / 100
            })
        }

        console.log(interests)

        res.render("interest",  {
                amount: amount,
                rateFrom : rateFrom,
                rateTo : rateTo,
                interests : interests
            } )
   }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    }
)