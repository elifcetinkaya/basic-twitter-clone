const mongoose = require("mongoose")

const tweetSchema = mongoose.Schema({
    tweet: {
        type: String,
    },
    likeCount: {
        type: Number
    },
    retweetCount: {
        type: Number
    },
    mentionCount: {
        type: Number
    }
})

module.exports = mongoose.model("Tweets", tweetSchema)