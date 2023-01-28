import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ id }) => {
  const [content, setContent] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${id}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-group mt-3">
        <label>content</label>
        <input
          className="form-control w-100"
          placeholder="enter title"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CommentCreate;
