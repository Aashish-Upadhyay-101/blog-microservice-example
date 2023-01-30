const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    const id = req.params.id;
    comments = commentsByPostId[id] || [];
    res.send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
    const id = req.params.id;

    const commentId = randomBytes(4).toString("hex");

    const { content } = req.body;

    const comment = commentsByPostId[id] || [];
    comment?.push({ id: commentId, content });
    commentsByPostId[id] = comment;

    await axios.post("http://localhost:4003/events", {
        type: "CommentCreated",
        data: {
            id: commentId,
            postId: id,
            content,
        },
    });

    res.status(201).send(commentsByPostId[id]);
});

app.listen(4001, () => {
    console.log("Server running on http://localhost:5000");
});
