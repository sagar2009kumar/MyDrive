const initializeRouters = require("./routers");
const initializeMiddleware = require("./middleware");
const initializeMongoose = require("./models");

const initialize = async expressApp => {
  initializeRouters(expressApp);
  initializeMiddleware(expressApp);
  initializeMongoose();
};

module.exports = initialize;
