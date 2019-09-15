const express = require("express");
const { auth } = require("../middleware");
const userRouter = new express.Router();
const services = require("../services");

userRouter.post("/user/signup", async (req, res) => {
  services.user.userSignup(req, res);
});

userRouter.post("/user/login", async (req, res) => {
  services.user.loginUser(req, res);
});

userRouter.post("/user/forgotpassword", async (req, res) => {
  res.status(201).send("Email has been sent for further step");
});

userRouter.get("/user/authenticate", async (req, res) => {
  res.status(201).send("User is authenticated");
});

userRouter.patch("/user/updatepassword", auth, async (req, res) => {
  services.user.updatePasswordUser(req, res);
});

userRouter.patch("/user/profileupdate", async (req, res) => {
  res.status(201).send("Profile has been updated");
});

userRouter.delete("/user/delete", auth, async (req, res) => {
  res.status(200).send("Profile has been deleted");
});

userRouter.patch("/user/pfupdate", async (req, res) => {
  res.status(200).send("Profile Pic has been updated");
});

module.exports = userRouter;
