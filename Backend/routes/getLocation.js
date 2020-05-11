var express = require("express");
var route = express.Router();
const data = require("./data.json");

route.get("/:id", async (req, res) => {
  try {
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
