const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);

const config = require("./config");

const profileRouter = require("./routes/profile");

const port = process.env.PORT || 3001;

const dbUrl = config.dbUrl;

var options = {
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/profile", profileRouter);

app.listen(port, function () {
    console.log("Runnning on " + port);
  });
module.exports = app;



