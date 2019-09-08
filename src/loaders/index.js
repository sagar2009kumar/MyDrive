const initializeRouters = require("./routers");
const initializeMiddleware = require("./middleware");

const initialize = async expressApp => {
  initializeRouters(expressApp);
  initializeMiddleware(expressApp);
  /* const mongoConnection = await mongooseLoader();
    console.log("MongoDB Intialized");
    await expressLoader({ app: expressApp });
    console.log("Express Intialized"); */
  // ... more loaders can be here
  // ... Initialize agenda
  // ... or Redis, or whatever you want
};

module.exports = initialize;
