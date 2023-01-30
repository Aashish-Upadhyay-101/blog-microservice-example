const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
    res.send({});
});

app.post("/posts", (req, res) => {
    res.send({});
});

app.listen(4002, () => {
    console.log("Server running on http://localhost:4002");
});
