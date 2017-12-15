//server.js

// modules =======

var express = require('express'),
     app    = express(),
     bodyParser = require('body-parser'),
     validator = require('express-validator'),
     morgan = require('morgan'),
     methodOverride = require('method-override');


 //configuration =============================
 
 
 // URLS AND VARIABLES =======================
   
var port = process.env.PORT || 8088;

// logger function

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
//use our logger middleware function

app.use(requestTime);
  

// add logging

app.use(morgan('dev'));

//parse  application/json

app.use(bodyParser.json());

// parse application/vnd.api+json as json

app.use(bodyParser.json({type : 'application/vnd.api+json'}));

// parse application /x-www-form-urlencoded

app.use(bodyParser.urlencoded({extended: true}));
 
//overide with the X-HTTP-method-overide header in the request (simulate delete/ put)
app.use(methodOverride('X-HTTP-Method-Override'));

//add validation middleware

app.use(validator({

  customValidators: {
    categoryValidator: function (input) {
         
         console.log(input);


         if( input === "coding" ||  input === "design" ||  input === "logo"){

           return true;
         }else{

           return false;
         }
    }
  }
}));

//set the  static file location /src
app.use(express.static(__dirname + '/src'));

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