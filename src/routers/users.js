const express = require("express");
const { auth } = require("../middleware");
const userRouter = new express.Router();

userRouter.post("/user/create", async (req, res) => {
  res.status(201).send("This is quite good");
});

userRouter.post("/user/login", auth, async (req, res) => {
  res.status(201).send("This is quite good");
});

userRouter.post("/user/forgotpassword", async (req, res) => {
  res.status(201).send("Email has been sent for further step");
});

userRouter.get("/user/authenticate", async (req, res) => {
  res.status(201).send("User is authenticated");
});

userRouter.patch("/user/updatepassword", async (req, res) => {
  res.status(201).send("User password has been reset");
});

userRouter.post("/user/profileupdate", async (req, res) => {
  res.status(201).send("Profile has been updated");
});

userRouter.delete("/user/delete", async (req, res) => {
  res.status(200).send("Profile has been deleted");
});

userRouter.patch("user/updateprofpic", async (req, res) => {
  res.status(200).send("Profile Pic has been updated");
});

module.exports = userRouter;
