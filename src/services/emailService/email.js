const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_APIKEY);

/* sending the email on welcome of the user */
const sendWelcomeEmail = (userEmail, name) => {
  const msg = {
    from: process.env.SEND_GRID_SENDER_EMAIL,
    to: userEmail,
    subject: process.env.SEND_GRID_WELCOME_SUBJECT,
    text: process.env.SEND_GRID_WELCOME_EMAIL_BODY,
    html: `Hi ${name}, <br> You can login with the following link.`
  };
  /* return promise */
  sgMail.send(msg).catch(() => {
    console.log("hello");
  });
};

/* sending the email on deletion of the user */
const sendCancellationEmail = (userEmail, name) => {
  const msg = {
    from: process.env.SEND_GRID_SENDER_EMAIL,
    to: userEmail,
    subject: process.env.SEND_GRID_CANCELLATION_SUBJECT,
    text: process.env.SEND_GRID_CANCELLATION_EMAIL_BODY,
    html: `Good Bye ${name}, <br> Is there any thing, 
    we could do to build our strong relationship ?.`
  };
  /* return promise */
  sgMail.send(msg).catch(() => {
    console.log("hello");
  });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };
