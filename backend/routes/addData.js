const express = require("express");
const { PersonInformation } = require("../schema/model");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, desc, subscribe } = req.body;
  //Converting the first letter of string toUppercase so we can save in database like this
  const caplitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  const addNewPerson = new PersonInformation({
    name: caplitalizeName,
    desc: desc,
    isDone: subscribe,
  });

  addNewPerson.save();
  res.json("Your data has been saved");
});

module.exports = router;
