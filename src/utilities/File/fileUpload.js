const multer = require("multer");

const userProfileUploader = multer({
  dest: process.env.PROFILE_PIC_FOLDER,
  limits: {
    fileSize: 1000000
  }
});

const userFileUploader = multer({
  dest: process.env.USER_FILE_FOLDER,
  limits: {
    fileSize: 1000000
  }
});

module.exports = {
  userProfileUploader: userProfileUploader,
  userFileUploader: userFileUploader
};
