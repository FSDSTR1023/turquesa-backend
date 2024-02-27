var express = require('express');
var router = express.Router();
const mailController = require('../services/mailService');

router.post('/send-email', (req, res) => mailController.sendMail(req, res));

module.exports = router;
