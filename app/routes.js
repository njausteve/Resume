// app/routes.js
var Project = require('./models/project'),
    project = new Project(),
    sendEmail = require('./email');

module.exports = function (app) {

    //server routes


    app.get('/api/resume', function (req, res) {

        var response = {};

        response.message = "horray we are in";
        response.requestTime = req.requestTime;

        res.json(response);
    });

    // get all projects 

    app.get('/api/projects', function (req, res) {


        console.log("get projects hit");

        Project.find(function (err, projects) {

            if (err)
                res.send(err);

            res.json(projects);

        });


    });


    // post projects

    app.post('/api/projects', function (req, res) {

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
            project.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'project created!' });
            });

        }
    });

    // send email API 

    app.post('/api/sendmail', function (req, res) {



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
            sendEmail.transporter.sendMail(mailOptions, function (err, info) {


                if (err) {

                    console.log(err);
                    return res.send(err);
                    
                }

                res.json(info);
                //console.log('Message sent: %s', info.messageId);


            });

        }



    });


    // route to handle all angular requests

    app.get('*', function (req, res) {

        res.sendfile('./_build/'); // load the single view file (angular will handle the page changes on the front-end)
    });

};