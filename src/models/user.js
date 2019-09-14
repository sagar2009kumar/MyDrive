/* eslint-disable new-cap */
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
    trim: true
  },
  password: {
    required: true,
    type: String,
    trim: true,
    minlength: 8
  },
  email: {
    required: true,
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid. Please enter a valid email.");
      }
    }
  },
  name: {
    required: true,
    type: String,
    trim: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

userSchema.pre("save", async function(next) {
  /* do not use the arrow function because it changes the scope */
  const currUser = this;

  /* if the password is already hashed this is used to prevent while
   * updating the password in which case password is already hashed */

  if (currUser.isModified("password")) {
    currUser.password = await bcrypt.hash(currUser.password, 8);
  }

  next();
});

/* unique field will not work due to the race condition you have to put the
 * index on the database schema you can get the schema index with
 *  db.Collection('user').getIndexes
 */
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ userName: 1 }, { unique: true });

/* function to generate the jwt token */

userSchema.methods.generateJWT = async function() {
  const currUser = this;

  /* signing off a user token */
  const token = jwt.sign(
    { _id: currUser._id.toString() },
    process.env.JWT_TOKEN_SECRET_KEY
  );

  /* saving the token with the user */
  currUser.tokens = currUser.tokens.concat({ token });
  await currUser.save();

  return token;
};

userSchema.statics.findUserByCredentials = async (loginId, password) => {
  /* Find by the email or username  */
  const dataToFind = [{ email: loginId }, { userName: loginId }];
  const currUser = await user.findOne({ $or: dataToFind });

  if (!currUser) {
    /* User does not exists */
    throw new Error("User does not exists");
  }

  /* User exists so check the password */
  const isMatched = await bcrypt.compare(password, currUser.password);

  if (!isMatched) {
    throw new Error("Unable to login");
  }

  return currUser;
};

const user = mongoose.model("User", userSchema);

module.exports = user;
