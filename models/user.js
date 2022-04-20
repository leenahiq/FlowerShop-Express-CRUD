const connection = require("../connection");

const { DataTypes } = require("Sequelize");

const User = connection.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    indexed: [{ unique: true, field: ["name"] }],
  }
);

module.exports = User;
