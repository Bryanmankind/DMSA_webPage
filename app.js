const express = require("express");
const path = require('path')

const app = express();

app.use(express.static("./template"))

app.use("./", (req, res) => {
    res.send("/index")
})


app.listen(5000, () => {
    console.log("App is listening on port 5000...")
})