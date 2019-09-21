const sendForgotEmail = require("./userForgotPassword");
const sendWelcomeEmail = require("./userWelcome");

module.exports = { user: { sendForgotEmail, sendWelcomeEmail } };
