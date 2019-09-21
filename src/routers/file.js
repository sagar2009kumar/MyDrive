const express = require("express");
const { auth } = require("../middleware");
const fileRouter = new express.Router();
const services = require("../services");

fileRouter.post("/file/upload", auth, async (req, res) => {
  res.send("File will be uploaded");
});

module.exports = fileRouter;
