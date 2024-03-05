const express = require("express");
const bodyParser = require("body-parser");
const {collection, collection1} = require('./modules/requestshema.js')
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./template"))


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/form", async (req, res) => {

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

app.post('/form-visit', async (req, res) => { 
    const data1 = {
        name: req.body.name,
        time: req.body.time,
        contact: req.body.contact,
        NotAlone: req.body.NotAlone,
        location: req.body.location,
    }

    try {
        if (!data1.name || !data1.time || !data1.contact || !data1.NotAlone || !data1.location ) {
            throw new Error ("All data required");
        }
         // Save data to MongoDB
         await collection1.create(data1);
         res.send("Request submitted successfully.");
    }catch (error) {
        res.status(400).send(error.message);
    }
})


app.listen(5000, () => {
    console.log("App is listening on port 5000...")
})