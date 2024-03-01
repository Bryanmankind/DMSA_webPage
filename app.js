const express = require("express");
const bodyParser = require("body-parser");
const collection = require('./modules/requestshema.js')
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./template"))


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", async (req, res) => {

    const data = {
        user_email: req.body.user_email,
        prayer_request: req.body.prayer_request,
    };
    try {
        // Validate data before saving to the database
        if (!data.user_email || !data.prayer_request) {
            throw new Error("Email and Prayer Request are required.");
        }

        // Save data to MongoDB
        await collection.create(data);
        res.send("Request submitted successfully.");
    } catch (error) {
        res.status(400).send(error.message);
    }
})


app.listen(5000, () => {
    console.log("App is listening on port 5000...")
})