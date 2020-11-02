const express = require('express')
require('dotenv').config(); //to utilize the .env file with the new port #

const users = require('./controllers/users'); //makes users a controller

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

//express passes every request to json function, which looks at body of request and parses
//it if its valid json request and puts it into the body of the request (the body property)
//creates a pipeline
app.use(express.json()); 

//middleware
app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if(arr.length > 1 && arr[1] != null){
    req.userID = +arr[1];
  }
  next();
});

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