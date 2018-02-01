
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectID = Schema.ObjectId;
var personSchema = new mongoose.Schema(

    {

        name: {
            type: String,
            lowercase: true,
            required: true,
        },
        title: { type: String, required: true },

        about_me: {type: String},
        latest_tweet:{
            tweet_id: { type: String, required: false},
            tweet: {type: String},
            tweet_date: {type: String}
         },
        fun_facts: {type: String},

        work_History: [{
            title: { type: String },
            company: { type: String },
            desc: { type: String },
            location: [{ type: String, required: true }],
            year: { type: String, required: true },
            _id: ObjectID
           }],

        development_Skills: [{ type: String, require: true }],

        design_Skills: [{ type: String, require: true }],

        education_History: [{
            year: { type: String, required: true },
            course: { type: String, require: true },
            institution: { type: String, require: true },
            desc: { type: String, require: true },
            _id: ObjectID
        }],

        linkedin: { type: String, require: true },

        interests: [{ type: String, require: true }],

        testimonials: [{
            name: { type: String, require: true },
            company: { type: String, require: true },
            testimony: { type: String, require: true },
            _id: ObjectID
        }]

    }
);


module.exports = mongoose.model('Person', personSchema);