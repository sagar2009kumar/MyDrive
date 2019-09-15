const user = require("../../models/user");

const loginUser = async (req, res) => {
  try {
    req = req.body;

    const currUser = await user.findUserByCredentials(
      req.loginId,
      req.password
    );

    const token = await currUser.generateJWT();
    if (currUser.isActive) {
      const userData = {
        _id: currUser._id,
        userName: currUser.userName,
        email: currUser.email,
        name: currUser.name,
        token: token
      };
      res.status(process.env.HTTP_STATUS_OK).send(userData);
    } else {
      res.status(process.env.HTTP_STATUS_BAD_REQUEST).send({
        code: process.env.APP_UNPROCESSABLE_ERROR,
        message: "User is not active.Please activate your account.",
        errorType: process.env.APP_UNPROCESSABLE_ERROR
      });
    }
  } catch (error) {
    res.status(process.env.HTTP_STATUS_BAD_REQUEST).send({
      code: error.code,
      message: error.message,
      errorType: process.env.APP_UNPROCESSABLE_ERROR
    });
  }
};

module.exports = loginUser;
