const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport')


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});


router.post('register', (req, res) => {
});

router.post('login', (req, res) => {
})

router.get('logout', (req, res) => {
    
})

module.exports = router;