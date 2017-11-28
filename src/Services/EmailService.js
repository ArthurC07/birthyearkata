const nodemailer = require('nodemailer');
const Email = require('email-templates');

class EmailService {

    send(email, name){

        return new Promise( (resolve) => {

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'atu.cr92@gmail.com',
                    pass: 'Jr_131415'
                }
            });

            let mailOptions = {
                from: 'atu.cr92@gmail.com',
                to: email,
                subject: 'Happy birthday!',
                text: 'Happy birthday, dear '+ name +'! :)!'
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    return 'error!';
                }

                transporter.close();
                resolve('Email sent: ' + info.response);
            });

        });
    }
}

module.exports = EmailService;



