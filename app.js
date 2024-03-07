const express = require("express");
const bodyParser = require("body-parser");
const {collection, collection1} = require('./modules/requestshema.js')
const path = require('path')
const flash = require ('express-flash')
const session = require ('express-session')

const app = express();

app.use(session({
    secret: "webApp",
    cookie: {MaxAge: 60000},
    saveUninitialized: false,
    resave: false,
}))     
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/template')));

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/form", async (req, res) => {

    const data = {
        user_email: req.body.user_email,
        prayer_request: req.body.prayer_request,
    };
    try {
        // Validate data before saving to the database
        if (!data.user_email || !data.prayer_request) {
            req.flash("message", "Email and Prayer Request are required.");
            return res.redirect("/?message=Email%20and%20Prayer%20Request%20are%20required.")
        }

        // Save data to MongoDB
        await collection.create(data);
        req.flash("message", "Request submitted successfully.");
        return res.redirect("/?message=Request%20submited%20successfully.")
    } catch (error) {       
        res.status(400).send(error.message);
    }
})


app.get("/form", (req, res) => {
    req.flash("message", "Email and Prayer Request are required.");
    res.redirect('/index');
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
            req.flash ("message", "All data required");
            return res.redirect("index");


        }
         // Save data to MongoDB
         await collection1.create(data1);
         req.flash("message", "Request submitted successfully.");
         return res.redirect("index");

    }catch (error) {
        res.status(400).send(error.message);
    }
})


app.listen(5000, () => {
    console.log("App is listening on port 5000...")
})