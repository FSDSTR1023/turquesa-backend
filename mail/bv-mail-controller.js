const brevo = require("@getbrevo/brevo");


class MailController {
    constructor() {
      this.apiInstance = new brevo.TransactionalEmailsApi();
      const apiKey = this.apiInstance.apiClient.authentications["api-key"];  
      apiKey.apiKey = process.env.BREVO_API_KEY;
      this.sendSmtpEmail = new brevo.SendSmtpEmail();
    }
  

  async sendEmail(req, res) {
    const msg = {
      subject: req.body.subject,
      htmlContent: "<h1>Hola, mundo</h1>",
      sender: { name: "John", email: "example@example.com" },
      to: [{ email: req.body.to, name: "Massi" }],
    };
    this.sendSmtpEmail = msg;
    try {
      await this.apiInstance.sendTransacEmail(this.sendSmtpEmail);
      res.send("Email sent");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      res.status(500).send("Error sending email");
    }
  }

  async sendEmailWithTemplate(req, res) {
    const msg = {
      sender: { name: "John", email: "example@example.com" },
      to: [{ email: req.body.to, name: "Rubén" }],
      subject: req.body.subject,
      templateId: 1,
      params: {
        message: req.body.until,
      },
    };
    this.sendSmtpEmail = msg;
    try {
      await this.apiInstance.sendTransacEmail(this.sendSmtpEmail);
      res.send("Email sent");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      res.status(500).send("Error sending email");
    }
  }
}

module.exports = MailController;