import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const response = await axios.get("http://localhost:4002/posts");
        setPosts(Object.values(response.data));
    }

    useEffect(() => {
        fetchPosts();
        console.log(posts);
    }, []);

    const renderPosts = posts.map((post) => (
        <div className="card p-3 col-md-3" key={post.id}>
            <div className="card-body">
                <h4>{post.title}</h4>
            </div>
            <CommentList id={post.id} comments={post.comments} />
            <b>Comments</b>
            <CommentCreate id={post.id} />
        </div>
    ));

    return <div className="row gap-4">{renderPosts}</div>;
};

export default PostList;
