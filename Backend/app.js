var express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const secret = require("./service/key");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//const Student =require("./db/studentmodel")
// const passport = require('passport');
app.use(flash());
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use(
  session({
    secret: secret.sessionsecret
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  "mongodb+srv://puneetjyot:handshake@handshake-mongo-zu6wh.mongodb.net/Handshake?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/user", require("./routes/userRoutes"));
app.use("/user/getcoord", require("./routes/getLocation"));

module.exports = app;
// app.listen(3001);
