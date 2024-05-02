const express = require("express");
const { PersonInformation } = require("../schema/model");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  //Converting the first letter of string toUppercase so we can search the name easyly cause saved it with upperCase;
  const caplitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  try {
    const findData = await PersonInformation.find(
      { name: caplitalizeName },
      //in mongodb you can tell in second parameter which property you don't want to see
      { _id: 0, __v: 0 }
    ); // Query the database dynamically based on the received name
    res.json(findData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
