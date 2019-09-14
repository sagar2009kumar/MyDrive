const createUser = require("../services/userService/userCreate");
const loginUser = require("../services/userService/userLogin");

module.exports = { user: { createUser, loginUser } };
