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

        // get latest tweet
        getLatestTweet.get('statuses/user_timeline', {
            user_id: 355697964,
            count: 2,
            tweet_mode: 'extended'
        }, function (err, data, response) {

            if (err) {
                console.log(err);

            } else {

                if (data[0] !== undefined) {

                    //extract id, date and text from tweet response 

                    var latestTweet = {

                        tweet_id: data[0].id_str,
                        tweet: data[0].full_text,
                        tweet_date: data[0].created_at
                    };

                    //check db for latest tweet id

                    Person.find({}, {
                        'latest_tweet': 1,
                        '_id': 0
                    }, function (err, profile) {

                        var latestTweetIdFromDb = profile[0].latest_tweet.tweet_id,
                            latestTweetFromDb = profile[0].latest_tweet;

                        // Handle any possible database errors
                        if (err) {
                            console.log(err);

                        } else {

                            //update db

                            if (latestTweet.tweet_id !== latestTweetIdFromDb) {

                                console.log("update db : with latest tweet");

                                Person.update({}, {
                                    $set: {
                                        "latest_tweet": latestTweet
                                    }
                                },

                                    function (err, newprofile) {

                                        if (err)
                                            console.log(err);

                                        console.log("tweet updated");

                                    }

                                );

                            }

                        }
                    });

                }

            }




        });

        next();

    }

};