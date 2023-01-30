import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
    return (
        <div className="container mt-4">
            <h1>Blog</h1>
            <PostCreate />
            <hr />
            <h4>Posts</h4>
            <PostList />
        </div>
    );
};

export default App;
