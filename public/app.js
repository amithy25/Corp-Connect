const express = require('express')
//const connection = require('../utilities/connectionDB')
const croute = require('../controller/croute')
const proute = require('../controller/profileController');
const session = require('express-session');

const app = express();

// trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'));

app.use(croute);
app.use(proute);



app.listen(3000);
