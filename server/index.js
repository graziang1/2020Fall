const express = require('express')

const users = require('./controllers/users'); //makes users a controller

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('Hello Hudson Valley! You requested ' + req.url)
})

//add to the pipeline: if it matches ./users, then it'll be passed to the users controller
//mount the users controller at users
app.use('/users', users);

//error handler
app.use((err, req, res, next) =>{
  console.log(err);
  res.status(err.status || 500).send( { message: err.message } )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})