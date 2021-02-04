import React from "react";
import { useState } from 'react';

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
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title } </h2>
                        <p>Written by { blog.author }</p>
                    </div>
                ))
            }
            {/* <h1>Home Page</h1> */}
            {/* <p>{name } is { age } years old</p> */}
            {/* <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
        
}
export default Home;