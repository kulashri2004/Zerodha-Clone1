const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true }, // Mobile number
  password: { type: String, required: true }, // New password field
});

const SignupModel = mongoose.model("Registered", SignupSchema);

module.exports = { SignupModel };
