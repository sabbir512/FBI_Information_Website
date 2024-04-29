const express = require("express");
const { PersonInformation } = require("../schema/model");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const findData = await PersonInformation.find(
      { name: name },
      { _id: 0, __v: 0 }
    ); // Query the database dynamically based on the received name
    res.json(findData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
