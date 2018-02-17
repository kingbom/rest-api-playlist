var mailer = require("nodemailer");

const smtpTransport = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test@gmail.com',
      pass: 'passwordmail'
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