const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;
  comments = commentsByPostId[id] || [];
  res.send(comments);
});

app.post("/posts/:id/comments", (req, res) => {
  const id = req.params.id;

  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;

  const comment = commentsByPostId[id] || [];
  comment?.push({ id: commentId, content });
  commentsByPostId[id] = comment;

  res.status(201).send(commentsByPostId[id]);
});

app.listen(4001, () => {
  console.log("Server running on http://localhost:5000");
});
