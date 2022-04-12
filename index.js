require("dotenv").config();
const express = require("express");
const app = express();
const methodRouter = require("./routes/method");

const connection = require("./connection");

app.use(express.json());

app.use("/method", methodRouter);

app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  connection.sync({ alter: true });
});
