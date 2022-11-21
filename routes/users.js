const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../model/User.js');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});


router.post('/register', (req, res) => {
    const { name, email, password, c_password } = req.body;

    let errors = [];
    if (!name || !email || !password || !c_password) {
        errors.push( {msg: 'please fill up the inputs!'} )
    };

    // compare the password
    if (password !== c_password) {
        errors.push( {msg: 'password dont match'} )
    };

    // check if password is less than 6
    if(password.length < 6) {
        errors.push( {msg: 'password must be atleast 6 characters'} )
    };

    // let the input values stays if invalid input occurs and renders the same page
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            c_password: c_password
        })
    } else {
        // validation passed, 
        // checking if email already existed
        User.findOne({email: email}).then((user) => {
            console.log('see', user);
            if (user) {
                errors.push({msg: 'email already exist'});
                res.render('register', {
                    errors: errors,
                    name: name,
                    email: email,
                    password: password,
                    c_password: c_password
                })
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });
                
                // password hashing before saving to the database
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;

                        // now let save
                        newUser.save().then((value) => {
                            console.log(value);
                            req.flash('success_msg', 'You are now registered, you can login!');
                            res.redirect('/users/login')
                        }).catch(value => {
                            console.log(value)
                        })
                    })
                )
            }
        })
    }
});

router.post('login', (req, res) => {
})

router.get('logout', (req, res) => {
    
})

module.exports = router;