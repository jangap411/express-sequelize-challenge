const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
const app = express();
const router = express.Router();
const User = require("../models/User");

app.use(cookieParser());

let data = {
  message: "",
};

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
    const whereUser = {
      username: username,
      password: password,
    };

    const user = await User.findOne({
      where: whereUser,
    });

    if (user) {
      data.message = username;
      //creates the cookie that holds the UUID (the session ID)
      let id = uuidv4();

      res.cookie("SID", id, {
        expires: new Date(Date.now() + 90000),
        httpOnly: true,
      });

      res.render("pages/members", data);
    } else {
      data.message = "Invalid username or password";
      res.render("pages/error", data);
    }

    //
  } catch (error) {
    data.message = error;
    res.redirect("pages/error", data);
  }
});

module.exports = router;
