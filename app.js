const express = require('express');
const app = express();
const _ = require('lodash');
const fs = require('fs');

//port number
const PORT = 3000;

// serving static pages
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root: __dirname})
})


app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', {root: __dirname})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about', '301') 
})

app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(`app is running on: ${PORT}:`)
})