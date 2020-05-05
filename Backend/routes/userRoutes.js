var express = require("express");
var route = express.Router();
const { generateToken, decryptToken } = require("../service/tokenservice");
const { generateUUID } = require("../service/uuidservice");
//const passport = require("../authenticate/passport_init");
const key = require("../service/key");
const mongoose = require("mongoose");
var multer = require("multer");
const passport = require("passport");

const { User } = require("../db/usermodel");
const bcrypt = require("bcrypt");

route.post("/register", async (req, res) => {
  console.log(req.body.student.email);
  try {
    const registerStudent = await User.create({
      emailId: req.body.student.email,
      age: req.body.student.age,
      password: bcrypt.hashSync(req.body.student.password, 10),
      name: req.body.student.name
    });
    console.log(req.body.student.name);

    res.status(201).send({
      user: {
        email: registerStudent.email,
        name: registerStudent.name,
        image: null,
        isRegister: true,
        resp: registerStudent
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      errors: {
        body: err
      }
    });
  }
});

route.post("/login", async (req, res) => {
  console.log(req.body.student.email);
  console.log("In login");

  const studenttoken = await generateToken(req.body.student.email);
  try {
    const student = await User.findOne({
      emailId: req.body.student.email
    });
    // console.log(student)
    if (student) {
      bcrypt.compare(req.body.student.password, student.password, function(
        err,
        isMatch
      ) {
        console.log(bcrypt.hashSync(req.body.student.password, 10));
        console.log(student.password);
        if (err) {
          res.status(500).send({
            errors: {
              body: err
            }
          });
        } else if (!isMatch) {
          res.status(403).send({
            errors: {
              body: "Unauthenticated User"
            }
          });
        } else {
          console.log("succesfully logged in");
          res.status(201).send({
            user: {
              emailId: student.email,
              name: student.name,
              image: null,
              token: studenttoken,
              resp: student,
              isLogin: true
            }
          });
        }
      });
    } else {
      res.status(401).send({
        errors: {
          body: "Unauthorised User"
        }
      });
    }
  } catch (err) {
    res.status(500).send({
      errors: {
        body: err
      }
    });
  }
});

module.exports = route;
