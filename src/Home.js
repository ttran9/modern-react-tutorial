import React from "react";
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        // the returned blogs returns a new filtered array. 
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    /*
     * this function below is run on the initial render and every time there is 
     a re-rendering (such as when the data is changed).
     * adding the empty array makes it so useEffect is only run once. 
     * if we want useEffect to run when the name state changes but not when the blogs state changes
     * then the name becomes a dependency we add into the second argument.
     */
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);
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
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
            {/* <h1>Home Page</h1> */}
            {/* <p>{name } is { age } years old</p> */}
            {/* <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
        
}
export default Home;