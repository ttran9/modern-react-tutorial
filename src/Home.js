import React from "react";
import { useState } from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
    // let name = 'mario';
    // second is function to be able to change the name
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    /*
    const handleClick = () => {
        setName('luigi'); // this forces react to re-render the component.
        setAge(30);
    }
    */

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
            {/* <h1>Home Page</h1> */}
            {/* <p>{name } is { age } years old</p> */}
            {/* <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
        
}
export default Home;