import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const baseURL = 'http://localhost:3000/api/blogs/'
    const getBlogURL = baseURL + id;
    const { data:blog, isPending, error } = useFetch(getBlogURL);
    const deleteBlogURL = baseURL + id;
    const history = useHistory();

    const handleDelete = () => {
        fetch(deleteBlogURL, {
            method: 'DELETE'
        }).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )
            }
        </div>
    )
}

export default BlogDetails;