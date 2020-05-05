const mongoose = require("mongoose");

const contacts = new mongoose.Schema({
  contact: String
});

const user = new mongoose.Schema({
  name: String,
  age: String,
  emailId: { type: String, unique: true },
  password: String,
  carId: String,
  emergencyContacts: [contacts]
});

const User = mongoose.model("User", user);

module.exports = {
  User
};
