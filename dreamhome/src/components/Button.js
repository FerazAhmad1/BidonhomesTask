import React from "react";
import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button onClick={clickHandler} className="logoutbtn">
      {props.children}
    </button>
  );
};

export default Button;
