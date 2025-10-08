const http = require('http');   // import library 

const server = http.createServer(
     (req, res) => {
          res.statusCode = 200;  // OK
          res.setHeader('Content-Type', 'text/html');
          console.log(req.url)

          if (req.url === '/now') {
               let now = new Date().toString()
               res.end(`<h1>Today is ${now}</h1>`);
          }
          else {
               res.end("<h1>Hello!!! </h1>")
          }
     }
);

// port, host , callback 
server.listen(8888, 'localhost',
     () => { console.log('Server running...'); }
);