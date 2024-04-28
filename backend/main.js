const express = require("express");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const addRouter = require("./routes/addData");
const getRouter = require("./routes/getData");
var cors = require("cors");
const app = express();
const port = 8000;

//middleware for transfer data to the frontend
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connecting with database
async function main() {
  await mongoose.connect("mongodb://localhost:27017/Informaion");
}
main().catch((err) => console.log(err));

app.use("/add", addRouter);
app.use("/find", getRouter);

//Server creating
app.listen(port, () => {
  console.log(`This app runing at http://localhost:${port}`);
});
