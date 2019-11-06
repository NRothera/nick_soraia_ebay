var mailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
       
    }
});

function createMessage(results) {
    var mail = {
        from: "Nick Rothera <nickrothera@gmail.com>",
        to: "nickrothera@gmail.com",
        subject: "Send Email Using Node.js",
        text: "hello",
        html: "<b>Node.js New world for me</b>"
    }

    return mail
    
}

exports.sendEmail(result) = smtpTransport.sendMail(createMessage(result), function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});