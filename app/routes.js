// app/routes.js
var Project = require('./models/project'),
  project = new Project(),
  Profile = require('./models/profile'),
  path = require('path'),
  profile = new Profile(),
  feed = require('feed-read'),
  sendEmail = require('./email');

module.exports = function(app) {

  //server routes

  //get about me data
  app.get('/api/aboutMe', function(req, res) {

    //fetch  latest tweet from db
    Profile.find(function(err, profile) {
      if (err)
        res.send(err);

      res.json(profile);

    });



  });

  // get medium posts
  app.get('/api/articles', function(req, res) {

    var mediumProfileUrl = "https://medium.com/feed/@" + process.env.MEDIUM_USERNAME;


    feed(mediumProfileUrl, function(err, articles) {

      if (err)
        res.send(err);

      res.json(articles);

      console.log(articles);

    });
  });


  // get all projects

  app.get('/api/projects', function(req, res) {

    Project.find(function(err, projects) {

      if (err)
        res.send(err);

      res.json(projects);

    });




  });


  // post profile
  app.post('/api/profile', function(req, res) {

    var reqObj = req.body;

    for (var prop in reqObj) {

      profile[prop] = reqObj[prop];

    }

    profile.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'profile created!'
      });
    });

    //}
  });



  // post projects

  app.post('/api/projects', function(req, res) {

    req.checkBody("img_name", "image name needed").optional().exists();
    req.checkBody("project_url", "must be a valid url").isURL();
    req.checkBody("category", "must be either 'coding', 'logo' or 'design'").categoryValidator();


    var errors = req.validationErrors();
    if (errors) {
      res.send(errors);
      return;

    } else {

      var reqObj = req.body;

      for (var prop in reqObj) {

        project[prop] = reqObj[prop];

      }
      project.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'project created!'
        });
      });

    }
  });

  // send email API

  app.post('/api/sendmail', function(req, res) {



    req.checkBody('email', "must be a valid email address").isEmail();

    var errors = req.validationErrors();
    if (errors) {
      res.send(errors);
      return;

    } else {

      var mailOptions = sendEmail.mailOptions;
      mailOptions.text = req.body.message;
      mailOptions.subject = "contact from : " + req.body.email;

      // nodemailer
      sendEmail.transporter.sendMail(mailOptions, function(err, info) {


        if (err) {

          console.log(err.response);
          return res.send(err);

        }

        res.json(info);
        //console.log('Message sent: %s', info.messageId);


      });



    }

  });


  app.get('*', function(req, res, next) {

    // path to change for prod
    res.sendfile(path.resolve('_build/index.html'));

//path for dev

  // res.sendfile(path.resolve('src/index.html'));
    
  });

};