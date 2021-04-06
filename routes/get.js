const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/User");

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

module.exports = router;
