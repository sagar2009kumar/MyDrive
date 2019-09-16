const mongoose = require("mongoose");

const initializeMongoose = async () => {

  try { 
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
        throw new Error("Unable to connect to database");
      });
    }catch(error) {
      console.log('Unable to connect to database' + error.message);
      process.exit(1);
    }
};

module.exports = initializeMongoose;
