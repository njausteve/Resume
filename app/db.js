
var mongoose = require('mongoose'),
       dbURI = 'mongodb://localhost/test'; 

 module.exports = function(app){  
   
    mongoose.connect(dbURI,  { useMongoClient: true });
    mongoose.connection.on('connected', function(){
   
         console.log('Mongoose default connection open to ' + dbURI);
    });
   mongoose.connection.on('error', function(){
       console.log("mongoose default connection error : " + err);
   }); 
   
   mongoose.connection.on("disconnected", function(){
     console.log('Mongoose default connection disconnected'); 
   });
   
   process.on('SIGINIT', function(){
            mongoose.connection.close(function(){
                  console.log('mongoose default connection disconnected through app termination');
                  process.exit(0);
            });
   });
  
    };