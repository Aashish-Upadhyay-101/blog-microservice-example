import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const response = await axios.get("http://localhost:4000/posts");
        setPosts(Object.values(response.data));
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = posts.map((post) => (
        <div className="card" key={post.id}>
            <div className="card-body">
                <h4>{post.title}</h4>
            </div>
            <CommentList id={post.id} />
            <b>Comments</b>
            <CommentCreate id={post.id} />
        </div>
    ));

    return (
        <div className="d-flex flex-row justify-content-between">
            {renderPosts}
        </div>
    );
};

export default PostList;
