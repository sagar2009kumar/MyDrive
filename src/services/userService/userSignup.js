/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable indent */
const user = require("../../models/user");

/**
 * function to get the duplicate key if present in the database
 */

const getDupKey = message => {
  const regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i;
  const match = message.match(regex);
  const indexName = match[1] || match[2];
  return indexName;
};

/**
 *
 * @param {string} userName
 * @param {string} password
 * @param {string} email
 * @param {string} name
 */

const createUser = (req, res) => {
  req = req.body;

  const currUser = new user({
    userName: req.userName,
    password: req.password,
    email: req.email,
    name: req.name
  });

  /* save the user in the database */
  currUser
    .save()
    .then(() => {
      res.status(process.env.HTTP_STATUS_RESOURCE_CREATED).send({
        code: process.env.APP_STATUS_OK,
        message: "User created successfully.",
        userName: req.userName,
        email: req.email
      });
    })
    .catch(error => {
      if (error.code == 11000) {
        const key = getDupKey(error.message);
        res.status(process.env.HTTP_STATUS_UNPROCESSABLE_ENTITY).send({
          code: error.code,
          message: `${key} already exists.`,
          errorType: process.env.APP_UNPROCESSABLE_ERROR
        });
      } else if (error.name == "ValidationError") {
        /* console.log(error); */
        res.status(process.env.HTTP_STATUS_UNPROCESSABLE_ENTITY).send({
          code: process.env.APP_VALIDATION_ERROR,
          message: `Please enter valid details.`,
          errorType: process.env.APP_VALIDATION_ERRORTYPE
        });
      } else {
        res.status(process.env.HTTP_STATUS_UNPROCESSABLE_ENTITY).send({
          code: error.code,
          message: error.message,
          errorType: process.env.APP_UNKNOWN_ERROR
        });
      }
    });
};

module.exports = createUser;
