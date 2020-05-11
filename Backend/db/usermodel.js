const mongoose = require("mongoose");

const contacts = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  relation: String,
});

const user = new mongoose.Schema({
  name: String,
  age: String,
  emailId: { type: String, unique: true },
  password: String,
  carId: String,
  emergencyContacts: [contacts],
  patient_id: String,
});

const perseizuretime = new mongoose.Schema({
  startTime: String,
  endTime: String,
});
const seizure = new mongoose.Schema(
  {
    patientID: Number,
    time: [perseizuretime],
  },
  { collection: "seizure" }
);
const Seizure = mongoose.model("seizure", seizure);
const User = mongoose.model("User", user);

module.exports = {
  User,
  Seizure,
};
