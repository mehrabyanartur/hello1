import React from "react";
import "./style.scss";

function Side(props) {
    const handleClick = () => props.setCount(Math.random() * 50);
    return (
        <div className="side_wrapper">
            Side
            <button onClick={handleClick}>click</button>
        </div>
    );
}

export default Side;
