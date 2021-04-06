const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");

//middleware
// app.use(express.json());

//create
router.post("/create", async (req, res) => {
  console.log("res.body", JSON.stringify(req.body));
  try {
    await User.create(req.body);
    res.render("pages/index");
  } catch (error) {
    console.log(error.message);
    res.render("pages/error");
  }
});

//login user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // const usernamePost = req.body.username;
    console.log("\n\nusername:", username, "\n\n");

    const user = await User.findOne({
      where: { username: username } && { password: password },
    });

    //creates the cookie that holds the UUID (the session ID)
    res.cookie("SID", id, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    console.log(user);
    res.render("pages/members");
  } catch (error) {
    console.log(error);
    res.render("pages/error");
  }
});

module.exports = router;
