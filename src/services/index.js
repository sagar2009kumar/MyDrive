/* eslint-disable max-len */
const userSignup = require("./userService/userSignup");
const loginUser = require("../services/userService/userLogin");
const updatePasswordUser = require("../services/userService/userUpdatePassword");
const deleteUser = require("../services/userService/userDelete");
const forgotPasswordUser = require("../services/userService/userForgotPassword");

module.exports = {
  user: {
    userSignup,
    loginUser,
    updatePasswordUser,
    deleteUser,
    forgotPasswordUser
  }
};
