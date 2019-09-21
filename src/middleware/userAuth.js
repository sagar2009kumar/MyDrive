/* eslint-disable quote-props */
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
    const currUser = await user.findOne({
      _id: decoded._id,
      authToken: token
    });

    if (!currUser) {
      /* If the user is not found */
      throw new Error("User not found Or Link has been expired");
    }

    /* assigning the user to the request body */
    req.currUser = currUser;
    next(); // to continue the execution
  } catch (e) {
    res
      .status(process.env.HTTP_STATUS_UNAUTHORIZED)
      .send({ error: "Invalid Token", message: e.message });
  }
};

module.exports = userAuth;
