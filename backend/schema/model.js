const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean,
});

const PersonInformation = mongoose.model("PersonInformation", PersonSchema);

module.exports = { PersonInformation };
