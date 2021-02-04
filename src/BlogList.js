import React from "react";

// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
// above is referencing the props and below demonstrates destructing.
const BlogList = ({blogs, title}) => {
    // const { blogs, title } = props;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title } </h2>
                        <p>Written by { blog.author }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList;