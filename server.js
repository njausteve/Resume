//  server.js

// modules =======

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  
  morgan = require('morgan'),

  expressValidator = require('express-validator'),
  middleware = require('./app/middleware'),
  methodOverride = require('method-override');


//  load environment variables

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}



//  configuration =================================

// URLS AND VARIABLES =======================
var port = process.env.PORT || 8088;

//  app.use(middleware.validatePost);


app.use(cors());
// add logging
app.use(morgan('dev'));

//  parse  application/json

app.use(bodyParser.json());

// parse application/vnd.api+json as json

app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

// parse application /x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
}));

//  overide with the X-HTTP-method-overide header in the request (simulate delete/ put)
app.use(methodOverride('X-HTTP-Method-Override'));

//  add validation middleware
app.use(expressValidator());


//  set the  static file location /src
app.use('/', express.static(__dirname + '/_build/', {
  redirect: false
}));



//  app.use(middleware.validatePost);
app.use('/api/aboutMe', middleware.fetchLatestTweet);

//routes ==========

require('./app/routes')(app);

//db connection
require('./app/db')(app);


// start the app

app.listen(port);

// log the user


console.log("Magic Happens on port " + port);




// expose app
exports = module.exports = app;