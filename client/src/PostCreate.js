import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-group mt-3">
        <label>title</label>
        <input
          className="form-control w-25"
          placeholder="enter title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;
