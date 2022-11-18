const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../model/User.js');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    const { name, email, password, c_password } = req.body;

    let errors = [];
    if (!name || !email || !password || !c_password) {
        errors.push({msg: 'please fill up the inputs!'})
    };

    // compare the password
    if (password !== c_password) {
        errors.push({msg: 'password dont match'})
    }

    // check if password is less than 6
    if(password.length < 6) {
        
    }
});


router.post('register', (req, res) => {
});

router.post('login', (req, res) => {
})

router.get('logout', (req, res) => {
    
})

module.exports = router;