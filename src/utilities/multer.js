const multer = require("multer");

const createProfileMulter = multer({
  dest: process.env.PROFILE_PIC_FOLDER,
  limits: {
    fileSize: 1000000
  }
});

module.exports = { createProfile: createProfileMulter };
