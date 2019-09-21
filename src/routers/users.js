const express = require("express");
const { auth, userAuth } = require("../middleware");
const userRouter = new express.Router();
const services = require("../services");

userRouter.post("/user/signup", async (req, res) => {
  services.user.userSignup(req, res);
});

userRouter.post("/user/login", async (req, res) => {
  services.user.loginUser(req, res);
});

userRouter.post("/user/forgotpassword", async (req, res) => {
  services.user.forgotPasswordUser(req, res);
});

userRouter.get("/user/authenticate/:token", userAuth, async (req, res) => {
  services.user.authenticateUser(req, res);
});

userRouter.patch("/user/updatepassword", auth, async (req, res) => {
  services.user.updatePasswordUser(req, res);
});

userRouter.patch("/user/profileupdate", async (req, res) => {
  res.status(201).send("Profile has been updated");
});

userRouter.delete("/user/delete", auth, async (req, res) => {
  services.user.deleteUser(req, res);
});

module.exports = userRouter;
