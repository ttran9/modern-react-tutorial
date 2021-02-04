import React from "react";
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /*
     * this function below is run on the initial render and every time there is 
     a re-rendering (such as when the data is changed).
     * adding the empty array makes it so useEffect is only run once. 
     * if we want useEffect to run when the name state changes but not when the blogs state changes
     * then the name becomes a dependency we add into the second argument.
     */
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/blogs')
                // get the response object and use the json function to get the response
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                // grab from the data object.
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
        
}
export default Home;