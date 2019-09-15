/* eslint-disable max-len */
const userSignup = require("./userService/userSignup");
const loginUser = require("../services/userService/userLogin");
const updatePasswordUser = require("../services/userService/userUpdatePassword");

module.exports = { user: { userSignup, loginUser, updatePasswordUser } };
