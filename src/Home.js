import React from "react";

const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
        
}
export default Home;