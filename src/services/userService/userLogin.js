const user = require("../../models/user");

const loginUser = async (req, res) => {
  try {
    req = req.body;

    const currUser = await user.findUserByCredentials(
      req.loginId,
      req.password
    );
    const token = await currUser.generateJWT();
    res.status(process.env.HTTP_STATUS_OK).send({ currUser, token });
  } catch (error) {
    res.status(process.env.HTTP_STATUS_BAD_REQUEST).send({
      code: error.code,
      message: error.message,
      errorType: process.env.APP_UNPROCESSABLE_ERROR
    });
  }
};

module.exports = loginUser;
