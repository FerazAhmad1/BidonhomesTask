import React from "react";
import { useRef, useState } from "react";
import { loginMethod } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setMode(true);
    let email = emailRef.current.value.trim();
    let userName = nameRef.current.value.trim();

    if (!email || !userName) return;

    navigator("/mainpage");
    localStorage.setItem(email, userName);
    dispatch(loginMethod({ email, userName }));
  };

  return (
    <div>
      <form>
        <p>Login</p>
        <input ref={nameRef} placeholder="Name" type="text" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <button onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
