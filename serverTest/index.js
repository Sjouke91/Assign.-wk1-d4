// import express
const express = require('express')

// create express server
const app = express()

// render function

function render(movieId) {
    const ToyStory = 
`<html>
<head>
    <title>This is my fabulous test page</title>
</head>
<body style="background-color: green;">
    <div>
        <h1>Toy Story - ${movieId} </h1>
        <p>ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum rerum tempore ut delectus, nemo nesciunt numquam doloribus, eius, quasi esse assumenda quibusdam? Illum repellendus beatae saepe nobis, error possimus!</p>
    </div>
</body>
</html>`;

    return ToyStory;
}

// register GET /movie endpoint
app.get(
  '/user/:movieId', // declares a parameter named title
  (req, res) => { 
    const movieId = req.params.movieId;

//switch case to select the right movie
    switch(movieId){
        case 'tt0114709':
        let page = render(movieId);
        res.send(page);
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