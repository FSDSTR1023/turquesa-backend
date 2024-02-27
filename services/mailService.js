// mailService.js
const brevo = require('@getbrevo/brevo');

class MailService {
    constructor() {
        let defaultClient = brevo.ApiClient.instance;
        let apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = process.env.BREVO_SECRET; 
        this.apiInstance = new brevo.TransactionalEmailsApi();
    }

    sendEmail(emailDetails) {
        let sendSmtpEmail = new brevo.SendSmtpEmail(emailDetails);

        return this.apiInstance.sendTransacEmail(sendSmtpEmail).then((data) => {
            console.log('Email sent successfully:', data);
            return data;
        }).catch((error) => {
            console.error('Error sending email:', error);
            throw error;
        });
    }
}

module.exports = MailService;
