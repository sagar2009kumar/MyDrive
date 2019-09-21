const express = require("express");
const { userRouter, fileRouter } = require("../routers");

const initializeRouters = async expressApp => {
  expressApp.use(express.json());
  expressApp.use(userRouter);
  expressApp.use(fileRouter);
};

module.exports = initializeRouters;
