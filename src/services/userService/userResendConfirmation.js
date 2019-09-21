const user = require("../../models/user");
const emailService = require("../emailService");

const resendConfirmationMail = async (req, res) => {
  try {
    const currUser = await user.findUserByCredentials(
      req.body.loginId,
      "",
      false
    );

    /* send the welcome email */
    emailService.user.sendWelcomeEmail(currUser);

    res.status(process.env.HTTP_STATUS_RESOURCE_CREATED).send({
      code: process.env.APP_STATUS_OK,
      message: "Email Sent Successfully",
      userName: req.userName,
      email: req.email
    });
  } catch (e) {
    res.status(process.env.HTTP_STATUS_NOT_FOUND_ERROR).send({
      errorCode: process.env.APP_STATUS_NOT_FOUND_ERROR,
      message: e.message,
      errorType: process.env.APP_STATUS_NOT_FOUND_ERRORTYPE
    });
  }
};

module.exports = resendConfirmationMail;
