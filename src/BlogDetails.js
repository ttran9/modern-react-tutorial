import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    const url = 'http://localhost:3000/api/blogs';
    return (
        <div className="blog-details">
            <h2>Blog details - { id } </h2>
        </div>
    )
}

export default BlogDetails;