const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.get('/users/:id', db.getUserById)

app.post('/user-sign-up', db.addUser);

app.post('/disp-card-n', db.addDispCard);

app.get('/disp-card/data', db.getDispCard)

// app.get('/disp/:state', db.getUserByState)

// app.get('/disp/:email', db.getUserByEmail)

// app.delete('/disp-card/:id', db.deleteDispCard);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

