const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const tweetRoute = require("./routes/tweets");

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use("/tweet", tweetRoute);

mongoose.connect("mongodb://localhost:27017/twitter-clone");

app.listen(8080);
