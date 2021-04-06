const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/User");

let data = {
  message: "",
};

//middleware
app.use(express.json());

router.get("/", (req, res) => {
  res.render("pages/index");
  // res.send("loaded");
});

//view all users
router.get("/user", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

//members only
router.get("/supercoolmembersonlypage", (req, res) => {
  res.render("pages/members");
});

//logout
router.get("/logout", (req, res) => {
  let id = req.cookies.SID;

  //creates the cookie that holds the UUID (the session ID)
  res.cookie("SID", id, {
    expires: new Date(Date.now() - 200),
    httpOnly: true,
  });
  res.render("pages/index");
});

module.exports = router;
