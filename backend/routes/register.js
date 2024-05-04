const { ResigterPerson } = require("../schema/registerSchema");
const express = require("express");
const router = express.Router();

//ADDING RESIGTER ROUTER FOR JUST CHECK
router.post("/", async (req, res) => {
  //destructing property from req.body which we got from the frontend form;
  const { name, email, password } = req.body;

  try {
    //Finding by email if there have any other person alreadly resitered;
    const existingUser = await ResigterPerson.find({ email: email });

    //checking if the person is alreadly available in database then we won't let them register;
    if (email === existingUser[0]?.email) {
      res
        .status(401)
        .json({ message: "This email has been already Registered" });
    } else {
      //adding to the database
      const register = new ResigterPerson({
        name: name,
        email: email,
        password: password,
      });
      register.save();
      res.json({ message: "You have registered successfully" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
