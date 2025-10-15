var express = require('express');
var path = require('path');
var app = express();
var port = 8888 

// Configure static files so that they are found in public folder 
app.use(express.static('public'))

app.get('/', (req, res) => {
   res.end("<h1>Static Files<h1>")
})
 

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
