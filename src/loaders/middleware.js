const { auth } = require("../middleware");

const initializeMiddleware = async expressApp => {
  expressApp.use(auth);
};

module.exports = initializeMiddleware;
