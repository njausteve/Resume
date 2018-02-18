var mongoose = require('mongoose'),
  //  production
  dbURI = 'mongodb://database:27017/test';

//  dev

// dbURI = 'mongodb://localhost/test';



module.exports = function(app) {

  mongoose.connect(dbURI, {
    useMongoClient: true
  });
  mongoose.connection.on('connected', function() {

    console.log('Mongoose default connection open to ' + dbURI);
  });
  mongoose.connection.on('error', function(error) {
    console.log("mongoose default connection error : " + error);
  });

  mongoose.connection.on("disconnected", function() {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINIT', function() {
    mongoose.connection.close(function(err) {
      console.log('mongoose default connection disconnected through app termination');
      process.exit(err ? 1 : 0);
    });
  });

};