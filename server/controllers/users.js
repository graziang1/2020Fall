const express = require('express');
const users = require('../models/users');
const router = express.Router();
 //these routes will be attached to a greater program

router
    .get('/', (req, res, next) => { //anyone who comes to this controller and wants to get info, theres a function
        users.getAll().then(x=> res.send( x ) )
        .catch(next);
    })
    
    .get('/types', (req, res, next) => {
        users.getTypes(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        users.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        users.add(req.query.name, req.query.age ).then(newUser => { //creates new user
            res.send( newUser ); //returns new user
        }).catch(next)
    })
    /*
    .get('/rand', (req, res, next) => {
        users.rand()
        .then(someVal => res.send({someVal}))
        .catch(next); //send object with a someVal property random # to client
    })
    */

module.exports = router;  //when this file is required, you'll get this router (return obj from file)

