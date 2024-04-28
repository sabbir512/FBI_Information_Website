const express = require("express");
const { PersonInformation } = require("../schema/model");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const findData = await PersonInformation.findOne({ name: name }); // Query the database dynamically based on the received name
    res.json(findData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
