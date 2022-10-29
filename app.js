// require express server
const express = require('express');
// use express server
const app = express();
// lodash library
const _ = require('lodash');
// read and write file module in node server
const fs = require('fs');

app.set("view engine","ejs");
app.set("views","./myViews");

//port number
const PORT = 3000;

// serving static pages
app.use(express.static('views'));

// index page route
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

// about page route
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

// redirexting user based on request made to the server
app.get('/about-us', (req, res) => {
    res.redirect('/about', '302');
    console.log(res.__dirname)
})

// 404 page
app.all('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})

// app.use( (res, req) => {
//     res.status.sendFile('./public/404.html', {root: __dirname})
// })

// server listing to the port number
app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(`app is running on: ${PORT}:`)
})