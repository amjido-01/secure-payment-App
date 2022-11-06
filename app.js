const express = require('express');
const engine = require('ejs-layout');
const mongoose = require('mongoose');
const router = express.Router();
const morgan = require('morgan');
const _ = require('lodash');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const ejs = require('ejs');
const fs = require('fs');

const app = express();


// database set up
const db = require('./config/keys').MangoURI
console.log(db)

//connecting to our db
mongoose.connect(db, { 'useNewUrlParser': true}).then(() => console.log('database connected'))
.catch(() => console.log('not connected'))

// const flash = require('connect-flash');
// app.use(session()); // session middleware
// app.use(require('flash')());

// morgan library
// const morgan = require('morgan')
// // ejs templating library
app.set("view engine","ejs");
app.engine('ejs', engine.__express);
// app.set('views', './myViews');

//port number
const PORT = 3000;
// serving static pages
app.use(express.static('public'));
// morgan instance
// app.use(morgan('tiny'))

// index page route
app.get('/', (req, res) => {
    // throw new Error('broken')
    res.render('index')
})

// about page route
app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

// redirecting user based on request made to the server
// app.get('/about-us', (req, res) => {
//     res.redirect('/about', '302');
//     console.log(res.__dirname)
// })

// 404 page
app.all('*', (req, res) => {
    res.status(404).render('404')
})

// app.use( (res, req) => {
//     res.status.sendFile('./public/404.html', {root: __dirname})
// })

// server listing to the port number
app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(`app is running on: ${PORT}:`);
    console.log('request recieved at:' + Date.now())
})