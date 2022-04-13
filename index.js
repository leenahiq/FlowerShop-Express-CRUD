require("dotenv").config();
const express = require("express");
const app = express();
const productRouter = require("./routes/product");

const connection = require("./connection");

app.use(express.json());

app.use("/product", productRouter);

app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  connection.sync({ alter: true });
});
