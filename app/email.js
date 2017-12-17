

var nodemailer = require('nodemailer');

module.exports = {


      transporter: nodemailer.createTransport({
            service: 'gmail',
            auth: {
                  //find out about tokens in Gmail
                  user: 'njaustevedomain@gmail.com',
                  pass: 'domino12@#njau'
            }
      }),

      mailOptions: {

            from: 'njaustevedomain@gmail.com',
            to: 'stephen.njau@aiesec.net',
            subject: '',
            text: '',
            html: ''
      }

};