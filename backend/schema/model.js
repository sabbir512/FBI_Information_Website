const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean,
});

//PersonInformation is constructor and this name will used to the database like this Informtaion/personinformations
const PersonInformation = mongoose.model("PersonInformation", PersonSchema);

module.exports = { PersonInformation };
