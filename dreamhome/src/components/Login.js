import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { loginMethod } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
    localStorage.setItem("name", userName);
    localStorage.setItem("email", email);
    dispatch(loginMethod({ email, userName }));
  };

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("name")) {
      navigator("/mainpage");
      dispatch(
        loginMethod({
          email: localStorage.getItem("email"),
          userName: localStorage.getItem("name"),
        })
      );
    }
  }, []);

  return (
    <div>
      <form className="loginform">
        <p>Login</p>
        <input
          ref={nameRef}
          placeholder="Name"
          type="text"
          className="loginInput"
        />
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          className="loginInput"
        />
        <button onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
