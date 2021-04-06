const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users-db", "admin", "pass", {
  dialect: "sqlite",
  host: "users.sqlite",
});

module.exports = sequelize;
