const express = require("express");
const app = express();
const PORT = 1612;
const cookieParser = require("cookie-parser");
const getRoutes = require("./routes/get");
const postRoutes = require("./routes/post");
const sequelize = require("./db/database");

//sync db
sequelize.sync().then(() => console.log("db connected"));

app.set("view engine", "ejs");
app.use(express.static("./"));

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use(getRoutes);
app.use(postRoutes);

app.listen(PORT, () => {
  console.log(`\n\rServer running ---> http://localhost:${PORT}/\n\r`);
});
