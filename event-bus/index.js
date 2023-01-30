const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
    const event = req.body;

    axios.post("http://localhost:4000/events", event); // post server
    axios.post("http://localhost:4001/events", event); // comment server

    res.send({ status: "OK" });
});

app.listen(4003, () => {
    console.log("Server running on http://localhost:4003");
});
