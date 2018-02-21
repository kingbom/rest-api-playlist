var mailer = require("nodemailer");
var xxx;

const smtpTransport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myemail@gmail.com',
      pass: 'mypassword'
    }
  });

module.exports.sendMail = function(sendTo, reqSubject, reqText , callback){
    var mailOptions = {
        from: '',
        to: sendTo,
        subject: reqSubject,
        text: reqText
    }
    smtpTransport.sendMail(mailOptions, callback);
    smtpTransport.close();
}