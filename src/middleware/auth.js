const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
    console.log("hello");
    next();
  } catch (e) {
    res.status(process.env.HTTP_UNAUTHORIZED).send({ error: "Invalid Token" });
  }
};

module.exports = auth;
