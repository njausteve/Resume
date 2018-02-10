var nodemailer = require('nodemailer');

module.exports = {


  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      //find out about tokens in Gmail
      user: process.env.MailUser,
      pass: process.env.MailPass
    }
  }),

  mailOptions: {

    from: process.env.MailFrom,
    to: process.env.MailTo,
    subject: '',
    text: '',
    html: ''
  }

};