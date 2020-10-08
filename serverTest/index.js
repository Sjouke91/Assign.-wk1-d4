// import express
const express = require('express')

// create express server
const app = express()

// register GET /movie endpoint
app.get(
  '/user/:movieId', // declares a parameter named title
  (req, res) => { 
    const movieId = req.params.movieId;
    res.send(`this movieId: ${movieId} corresponds with scary movie`)
  }
)

// 3000 is common
const port = 3000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)



// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)