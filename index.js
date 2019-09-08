require("dotenv").config({ path: __dirname + "/config/dev.env" });
const express = require("express");
const initLoaders = require("./src/loaders");
/**
 * The initial function of application to start the server
 */
async function startServer() {
  const app = new express();

  await initLoaders(app);

  app.listen(process.env.SERVER_PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Your server is ready !");
  });
}

startServer();
