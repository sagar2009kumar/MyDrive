const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_APIKEY);

/* sending the email on welcome of the user */
const sendForgotEmail = currUser => {
  const msg = {
    from: process.env.SEND_GRID_SENDER_EMAIL,
    to: currUser.email,
    subject: process.env.SEND_GRID_FORGOTPASSWORD_SUBJECT,
    text: process.env.SEND_GRID_FORGOTPASSWORD_EMAIL_BODY,
    html: `Hi ${currUser.name}, <br> You can reset your password with the following link.`
  };
  /* return promise */
  sgMail.send(msg).catch(error => {
    console.log("Unable to send email");
  });
};

module.exports = sendForgotEmail;
