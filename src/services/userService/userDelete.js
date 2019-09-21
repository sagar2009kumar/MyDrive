const emailService = require("../emailService");

const deleteUser = async (req, res) => {
  const currUser = req.currUser;

  try {
    /* deleting the user from the database */
    await currUser.delete();

    res.status(process.env.HTTP_STATUS_OK).send({
      code: process.env.APP_STATUS_OK,
      message: "User has been successfully deleted"
    });
  } catch (error) {
    res.status(process.env.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({
      code: process.env.APP_INTERNAL_SERVER_ERROR,
      message: "Unable to process your request right now. Please try again.",
      errorType: process.env.APP_INTERNAL_SERVER_ERRORTYPE
    });
  }
};

module.exports = deleteUser;
