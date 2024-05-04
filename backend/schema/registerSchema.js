const mongoose = require("mongoose");

const ResigterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // name field is required
      },
      email: {
        type: String,
        required: true, // email field is required
      },
      password: {
        type: String,
        required: true, // password field is required
      },
    
});

const ResigterPerson = mongoose.model("ResigterPerson", ResigterSchema);

module.exports = { ResigterPerson };
