const mongoose = require("mongoose");

const initializeMongoose = async () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch(e => {
      console.log("Unable to connect to database");
      console.log(e);
      throw new Error("Unable to connect to database");
    });
};

module.exports = initializeMongoose;
