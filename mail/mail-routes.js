const express = require("express");
const router = express.Router();
const MailController = require("./bv-mail-controller");
const mailController = new MailController();

/* GET home page. */
router.post("/", mailController.sendEmail.bind(mailController));
router.post(
  "/template",
  mailController.sendEmailWithTemplate.bind(mailController)
);

module.exports = router;