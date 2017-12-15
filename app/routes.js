 // app/routes.js
var Project = require('./models/project');
var project = new Project();

 module.exports = function(app){
 
           //server routes
          

         app.get('/api/resume', function (req, res) {
            
                var response = {}; 
                            
                       response.message = "horray we are in";
                       response.requestTime = req.requestTime;
                      
                res.json(response);
              });            

        // get all projects 

        app.get('/api/projects/', function(req, res){


               console.log("get projects hit");

                Project.find( function(err, projects){

                    if(err)
                          res.send(err);
                          
                       res.json(projects);   

                });
            
             
            });


    // post projects

        app.post('/api/projects/', function(req, res){
                         
            req.checkBody("img_url", "must be a valid url").optional().isURL();
            req.checkBody("project_url", "must be a valid url").isURL();
            req.checkBody("category", "must be either 'coding', 'logo' or 'design'").categoryValidator();

          
            var errors = req.validationErrors();
            if (errors) {
              res.send(errors);
              return;

            } else {
              
            var reqObj = req.body;
            
           for(var prop in reqObj){
 
             project[prop] =  reqObj[prop];
             
           }
                  project.save(function(err) {
                   if (err)
                       res.send(err);
       
                   res.json({ message: 'project created!' });
               });

            }
        });


    // route to handle all angular requests

          app.get('*', function(req, res) {

            res.sendfile('./_build/'); // load the single view file (angular will handle the page changes on the front-end)
        });

 };