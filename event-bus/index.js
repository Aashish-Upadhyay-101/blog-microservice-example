const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.get("/events", (req, res) => {
    res.send(events);
});

app.post("/events", (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post("http://localhost:4000/events", event); // post server
    axios.post("http://localhost:4001/events", event); // comment server
    axios.post("http://localhost:4002/events", event); // query server
    axios.post("http://localhost:3999/events", event); // moderation server

    res.send({ status: "OK" });
});

app.listen(4003, () => {
    console.log("Server running on http://localhost:4003");
});
