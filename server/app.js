const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const tweetRoute = require("./routes/tweets")

app.use("/tweet", tweetRoute)

mongoose.connect("mongodb://localhost:27017/twitter-clone")

app.listen(8080)