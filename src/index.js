const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose  = require("mongoose");
const app = express();

app.use(bodyParser.json());

let url ="mongodb+srv://omkar077:BeEHI8wSohCTOfTl@cluster0.tyx7riv.mongodb.net/DB1";
let port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function() {
  console.log("Express app running on port " + port);
});