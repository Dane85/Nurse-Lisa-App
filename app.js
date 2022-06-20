const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


// set the view engine to ejs


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.static('files'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

//listening port
app.listen(process.env.PORT || port, () => {
  console.log(`App listening at port ${port}`)
})