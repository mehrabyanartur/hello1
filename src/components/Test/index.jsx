import React from "react";
import "./style.scss";
import Side from "../Side";

function Test(props) {
  const handleClick = () => {};
  return (
    <div className="test_wrapper">
      <p>Test</p>
      <button onClick={handleClick}>click</button>
      <Side setCount={props.setCount} />
    </div>
  );
}

export default Test;
