const express = require("express");
const route = express.Router();
const {
  addNewSignup,
  getSignup,
  getLogin
} = require("../controller/signupController.js");

route.post("/addNewAdmin", addNewSignup);
route.get("/getAdmin", getSignup);
route.post("/getLogin", getLogin);

module.exports = route;
