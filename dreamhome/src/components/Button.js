import React from "react";
import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button onClick={clickHandler} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
