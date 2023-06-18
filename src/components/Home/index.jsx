import React from "react";
import "./style.scss";

function Home(props) {
    const handleClick = () => props.setCount(Math.random() * 50);
    return (
        <div className="home_wrapper">
            <p>Home</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
}

export default Home;
