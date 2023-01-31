const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {});

app.listen(3999, () => {
    console.log("Server running at http://localhost:3999");
});
