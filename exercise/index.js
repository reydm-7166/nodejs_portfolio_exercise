const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/view'));

app.listen(8000, () => {
    console.log("Connection Established.");
})

app.get('/', (req, res) => {
    res.render('user/home');
});

app.get('/about', (req, res) => {
    res.render('user/about');
});

app.get('/contact', (req, res) => {
    res.render('user/contact')
})

