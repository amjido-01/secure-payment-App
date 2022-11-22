const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const router = express.Router();
const morgan = require('morgan')
const _ = require('lodash');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const ejs = require('ejs');
const fs = require('fs');

const app = express();


// database set up
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch(() => console.log('not connected'))




//port number
const PORT = process.env.PORT || 3000;


app.use(expressEjsLayout)
app.set('view engine', 'ejs')


// serving static pages
app.use(express.static('public'))

// body-parser
app.use(express.urlencoded({extended: false}))


// index page route
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// about page route

//coming back redirecting user based on request made to the server

// 404 page
app.all('*', (req, res) => {
    res.status(404).render('404')
})

app.use(morgan('tiny'))

// server listing to the port number
app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(`app is running on: ${PORT}:`);
    console.log('request recieved at:' + Date.now())
})