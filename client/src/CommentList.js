import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ id, comments }) => {
    console.log(comments);
    const renderComments = comments?.map((comment) => (
        <ul key={comment.id}>
            {comment.status === "rejected" ? (
                <li>Comment Rejected</li>
            ) : comment.status === "pending" ? (
                <li>Comment is pending, and under some checks</li>
            ) : (
                <li>{comment.content}</li>
            )}
        </ul>
    ));

    return (
        <div className="d-flex flex-wrap flex-row justify-content-between">
            <div>{renderComments}</div>
        </div>
    );
};

export default CommentList;
