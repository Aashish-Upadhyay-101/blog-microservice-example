import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ id }) => {
  const [comments, setComments] = useState([]);

  async function fetchPosts() {
    const response = await axios.get(
      `http://localhost:4001/posts/${id}/comments`
    );
    setComments(Object.values(response.data));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(comments);

  const renderComments = comments.map((comment) => (
    <ul key={comment.id}>
      <li>{comment.content}</li>
    </ul>
  ));

  return (
    <div className="d-flex flex-wrap flex-row justify-content-between">
      <div>{renderComments}</div>
    </div>
  );
};

export default CommentList;
