/* eslint-disable quote-props */
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
    const currUser = await user.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!currUser) {
      /* If the user is not found */
      throw new Error();
    }

    /* assigning the user to the request body */
    req.currUser = currUser;
    next(); // to continue the execution
  } catch (e) {
    res
      .status(process.env.HTTP_STATUS_UNAUTHORIZED)
      .send({ error: "Invalid Token" });
  }
};

module.exports = auth;
