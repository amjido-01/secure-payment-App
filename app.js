const express = require('express');
const app = express();
const _ = require('lodash');
const fs = require('fs');

//port number
const PORT = 3000;

// serving static pages
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile('/index.html')
// })

app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

app.listen(PORT, () => {
    console.log(`app is running on: ${PORT}:`)
})