require("dotenv").config();
const express = require("express");
const passport = require("passport");

const app = express();

const connection = require("./connection");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const {
  registerStrategy,
  loginStrategy,
  verifyStrategy,
} = require("./middleware/auth");

app.use(express.json());

app.use("/product", productRouter);
passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);
app.use("/user", userRouter);

//linking up to server
app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  connection.sync({ alter: true });
});
