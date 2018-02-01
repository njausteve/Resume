
var validator = require('express-validator'),
  Person = require('./models/profile'),
  person = new Person(),
  getLatestTweet = require('./twitter');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = {
  validatePost: function (req, res, next) {

    validator({

      customValidators: {
        categoryValidator: function (input) {

          console.log(input);


          if (input === 'coding' || input === 'design' || input === 'logo') {
            return true;
          } else {

            return false;
          }
        }
      }
    });

    next();

  },
  fetchLatestTweet: function (req, res, next) {

    console.log("A request for things received");

    // get latest tweet
    getLatestTweet.get('statuses/user_timeline', { user_id: 355697964, count: 2, tweet_mode: 'extended' }, function (err, data, response) {
      console.log(data[0]);
      if (err)
        console.log(err);

      //extract id, date and text from tweet response 

      var latestTweet = {

        tweet_id: data[0].id_str,
        tweet: data[0].full_text,
        tweet_date: data[0].created_at
      };

      console.log(latestTweet);

      //check db for latest tweet id

      Person.find({}, { 'latest_tweet': 1, '_id': 0 }, function (err, profile) {

        var latestTweetIdFromDb = profile[0].latest_tweet.tweet_id,
          latestTweetFromDb = profile[0].latest_tweet;

        // Handle any possible database errors
        if (err) {
          console.log(err);

        } else {

          //update db

          if (latestTweet.tweet_id !== latestTweetIdFromDb) {

            console.log("update db");

            Person.update({},
              { $set: { "latest_tweet": latestTweet } },

              function (err, newprofile) {

                if (err)
                  console.log(err);

               console.log("tweet updated");   

              }

            );

          }

        }
      });

    });

    next();

  }

};
