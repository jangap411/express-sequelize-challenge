const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const User = require("../models/User");

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
    let data = {
      username: username,
    };
    console.log("\n\nusername:", username, "\n\n");

    const user = await User.findOne({
      where: { username: username } && { password: password },
    });

    //creates the cookie that holds the UUID (the session ID)
    let id = uuidv4();

    res.cookie("SID", id, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });

    console.log(user);
    res.render("pages/members", data);
  } catch (error) {
    console.log(error);
    res.render("pages/error");
  }
});

module.exports = router;
