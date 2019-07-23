const config = require('../config/config');
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: "hello@teste.com",
        subject: subject,
        html: body
    });
} 