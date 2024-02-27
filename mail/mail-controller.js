class MailController{
    constructor(){
        this.mailService = new this.mailService();
    }
}

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "From name", "email": "myfromemail@mycompany.com"};
emailCampaigns.type = "classic";

htmlContent: 'Congratulations! You successfully sent this example campaign via the Brevo API.';
recipients: {listIds: [2, 7]}
scheduledAt: {'2018-01-01 00:00:01'}

apiInstance.createEmailCampaign(emailCampaigns)
  .then(function(data) {
    // Success response
    console.log('API called successfully. Returned data: ', data);
  })
  .catch(function(error) {
    // Error handling
    console.error(error);
  });
