const user = require("../../models/user");
const emailService = require("../emailService");

const forgotPasswordUser = async (req, res) => {
  try {
    /* saving the user to the database */

    const currUser = await user.findUserByCredentials(
      req.body.loginId,
      "",
      false
    );

    emailService.user.sendForgotEmail(currUser);

    res.status(process.env.HTTP_STATUS_OK).send({
      code: process.env.APP_STATUS_OK,
      message: "Please find your reset link in your email."
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      /* console.log(error); */
      res.status(process.env.HTTP_STATUS_UNPROCESSABLE_ENTITY).send({
        code: process.env.APP_VALIDATION_ERROR,
        message: "Please enter valid details.",
        errorType: process.env.APP_VALIDATION_ERRORTYPE
      });
    } else {
      res.status(process.env.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({
        code: process.env.APP_INTERNAL_SERVER_ERROR,
        message: "Unable to process your request right now. Please try again.",
        errorType: process.env.APP_INTERNAL_SERVER_ERRORTYPE
      });
    }
  }
};

module.exports = forgotPasswordUser;
