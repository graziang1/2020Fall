const express = require('express');
const users = require('../models/users');
const router = express.Router();
 //these routes will be attached to a greater program

router
    .get('/', (req, res, next) => { //anyone who comes to this controller and wants to get info, theres a function
        users.getAll().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => { 
        const id = +req.params.id; //+ converts id to a number request a parameter
        if(!id) return next(); //if id is not a number, try another function on the pipeline
        users.get(id).then(x=> res.send( x ) )
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
        users.add(
            req.body.FirstName, 
            req.body.LastName,
            req.body.DOB,
            req.body.Password,
            6 /*User Type*/,
        ).then(newUser => { //creates new user
            res.send( newUser ); //returns new user
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        users.update( req.params.id,
            req.body.FirstName, 
            req.body.LastName,
            req.body.DOB,
            req.body.Password,
            6 /*User Type*/,
        ).then(newUser => { //creates new user
            res.send( newUser ); //returns new user
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        users.remove( req.params.id).then(msg => { //creates new user
            res.send( msg ); //returns new user
        }).catch(next)
    })
module.exports = router;  //when this file is required, you'll get this router (return obj from file)

