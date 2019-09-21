const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_APIKEY);

/* sending the email on welcome of the user */
const sendWelcomeEmail = async currUser => {
  userEmail = currUser.email;
  name = currUser.name;
  const link = await currUser.generateAuthenticationLink();

  const msg = {
    from: process.env.SEND_GRID_SENDER_EMAIL,
    to: userEmail,
    subject: process.env.SEND_GRID_WELCOME_SUBJECT,
    text: process.env.SEND_GRID_WELCOME_EMAIL_BODY,
    html: `Hi ${name}, <br> Welcome to My Drive App. <br> You can login with the following link.<br> <br> ${link}`
  };
  /* return promise */
  sgMail.send(msg).catch(e => {
    console.log(e);
    console.log(userEmail);
    console.log("Unable to send welcome email");
  });
};

module.exports = sendWelcomeEmail;
