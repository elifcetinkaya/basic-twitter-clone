const express = require("express")
const router = express.Router();
const Tweet = require("../models/Tweet")

router.get("/", async (req, res) => {
    try {
        const allTweets = await Tweet.find({})
        res.json(allTweets)
    }
    catch (e) {
        res.json({ error: e })
    }
})

router.post("/create-tweet", async (req, res) => {
    try {
        const tweet = new Tweet({
            tweet: req.body.tweet,
        })
        tweet.save()
            .then(data => res.json(data))
            .catch(e => res.json({ error: e }))
    }
    catch (e) {
        res.json({ error: e })
    }
})

module.exports = router