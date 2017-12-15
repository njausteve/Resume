

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

 var ObjectID = Schema.ObjectId;    
 var projectSchema = new mongoose.Schema(

    {
    
            title: {
                  type: String,
                  lowercase: true, 
                  required: true,       
               },
              __id: ObjectID,
              alias: {type:String},
              img_url:[{type:String}], 
              project_url: String,
              type: {type:String},
              desc1: {type:String},
              desc2: {type:String},
              category: {type:String},
              client: {type:String},
              tech: [{type: String, required: true}]             

    }
  );  


module.exports = mongoose.model('Project', projectSchema);