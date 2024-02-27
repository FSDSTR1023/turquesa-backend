// mailController.js
const MailService = require('./services/mailService'); // Adjust the path as necessary

class MailController {
    constructor() {
        this.mailService = new MailService();
    }

    sendMail(req, res) {
        const emailDetails = { /* Fill with your email details similar to the initial example */ };
        this.mailService.sendEmail(emailDetails).then((data) => {
            res.json({ message: 'Email sent successfully', data });
        }).catch((error) => {
            res.status(500).json({ message: 'Failed to send email', error });
        });
    }
}

module.exports = MailController;
