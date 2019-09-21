const authenticateUser = async (req, res) => {
  try {
    if (req.currUser.authToken == req.params.token) {
      req.currUser.authToken = "";
      req.currUser.isActive = true;
      await req.currUser.save();
      res.status(process.env.HTTP_STATUS_OK).send({
        status: process.env.APP_STATUS_OK,
        message: "User is authenticated."
      });
    } else {
      res.status(process.env.HTTP_STATUS_BAD_REQUEST).send({
        errorCode: process.env.APP_STATUS_BAD_REQUEST_ERROR,
        message: "Link is expired or invalid link.",
        errorType: process.env.APP_STATUS_BAD_REQUEST_ERRORTYPE
      });
    }
  } catch (e) {
    res.status(process.env.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({
      errorCode: process.env.APP_INTERNAL_SERVER_ERROR,
      message: e.message,
      errorType: process.env.APP_INTERNAL_SERVER_ERRORTYPE
    });
  }
};

module.exports = authenticateUser;
