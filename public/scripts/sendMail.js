var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

// Create the transporter with the required configuration for Outlook
// change the user and pass !



 createAndSendMail = function(text) {

    var transporter = nodemailer.createTransport({
        service: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "nickrothera@gmail.com",
            pass: process.env.EMAIL_PASSWORD

        }
    })

// setup e-mail data, even with unicode symbols

    const mailOptions = {
        from: '"SomeName"<nickrothera@gmail.com>', // TODO replace this with your own email
        to: 'nickrothera@hotmail.co.uk', // TODO: the receiver email has to be authorized for the free tier
        subject: 'test email',
        text: 'please work'
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return (err, null);
        }
        return (null, data);
    })
}

module.exports = createAndSendMail;

