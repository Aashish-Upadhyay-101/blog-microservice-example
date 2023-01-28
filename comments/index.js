const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();

app.get("/posts/:id/comments", (req, res) => {});

app.post("posts/:id/comments", (req, res) => {});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
