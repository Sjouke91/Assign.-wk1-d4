// import express
const express = require('express')

// create express server
const app = express()

// register GET /movie endpoint
app.get(
  '/user/:movieId', // declares a parameter named title
  (req, res) => { 
    const movieId = req.params.movieId;

//switch case to select the right movie
    switch(movieId){
        case 'tt0114709':
        res.send(`this is the movie page of Toy Story`);
        break;
        case 'tt0114710':
        res.send(`this is the movie page of scary movie`);
        break;
        default:
        res.send(`movie not found`);
        break;
    }
    
  }
)

// 3000 is common
const port = 3000

// start listening
app.listen(port, () => console.log(`Listening on :${port}`)
)

// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)