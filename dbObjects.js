const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "./.data/database.sqlite"
});

module.exports = require("./models/Logs")(sequelize, Sequelize.DataTypes);
