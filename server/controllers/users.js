const express = require('express');
const users = require('../models/users');
const router = express.Router();
 //these routes will be attached to a greater program

router.get('/', (req, res) => { //anyone who comes to this controller and wants to get info, theres a function
        throw { status: 501, message: "This is a fake error" }
        res.send( users.getAll() );
    })
    .get('/search', (req, res) => {
        res.send( users.search(req.query.q) );
    })
    .post('/', (req, res) => {
        const newUser = users.add(req.query.name, req.query.age ); //creates new user
        res.send( newUser ); //returns new user
    })

module.exports = router;  //when this file is required, you'll get this router (return obj from file)

