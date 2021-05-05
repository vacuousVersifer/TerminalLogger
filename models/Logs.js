module.exports = (sequelize, DataTypes) => {
  return sequelize.define("logs", {
    day: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    identifier: DataTypes.STRING(10),
    log: DataTypes.STRING(2000),
    type: DataTypes.STRING
  }, {
    timestamps: false,
  });
};
