var express = require("express");
var route = express.Router();
const data = require("./data.json");

route.get("/user/getcoord/:id", async (req, res) => {
  try {
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
});
