const { DataTypes } = require("sequelize");

const connection = require("../connection");

const Flower = connection.define(
  "Flower",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    indexed: [{ unique: true, field: ["name"] }],
  }
);

module.exports = Flower;
