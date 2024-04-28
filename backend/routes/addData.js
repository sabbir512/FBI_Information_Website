const express = require("express");
const { PersonInformation } = require("../schema/model");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, desc, subscribe } = req.body;

  const addNewPerson = new PersonInformation({
    name: name,
    desc: desc,
    isDone: subscribe,
  });

  addNewPerson.save();
  res.json("Your data has been saved");
});

module.exports = router;
