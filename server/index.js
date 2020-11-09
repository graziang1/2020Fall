const express = require('express');
const path = require('path');
require('dotenv').config(); //to utilize the .env file with the new port #

const users = require('./controllers/users'); //makes users a controller

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

//express passes every request to json function, which looks at body of request and parses
//it if its valid json request and puts it into the body of the request (the body property)
//creates a pipeline
//Middleware
app.use(express.json()); 
app.use(express.static(__dirname + '../docs')); //will serve files straight off your computer (hosting static files)

//Authentication/Authorization
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
    req.userID = +arr[1];
  }
  next();
});

//API
app.get('/hello', (req, res, next) => {
  res.send('Hello Hudson Valley! You requested ' + req.url)
})

//add to the pipeline: if it matches ./users, then it'll be passed to the users controller
//mount the users controller at users
app.use('/users', users);

app.get('*', (req, res, next) => {
  const filename = path.join(__dirname + '/../docs/index.html');
  console.log(filename);
  res.sendFile( filename );
})

//error handler
app.use((err, req, res, next) =>{
  console.log(err);
  res.status(err.status || 500).send( { message: err.message } )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})