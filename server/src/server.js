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

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users/:id', db.getUserById)

app.get('/disp/:_State', db.getUserByState)

app.get('/disp/:_State', db.getUserByEmail)
     
app.get('/random-card', db.getCard)

app.get('/disp-card', db.getDispCard)

app.post('/disp-card', db.addDispCard);

app.delete('/disp-card/:id', db.deleteDispCard);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

