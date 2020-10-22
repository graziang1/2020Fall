const express = require('express')

const users = require('./controllers/users'); //makes users a controller

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Hudson Valley! You requested ' + req.url)
})

//add to the pipeline: if it matches ./users, then it'll be passed to the users controller
app.use('/users', users); //mount the users controller at users

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})