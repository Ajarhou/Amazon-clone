/* eslint-disable no-unreachable */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./login.css";

const Login = () => {
  return(
    <div className="login">
    <Link to="/">
      <img className="login-logo" src={logo} alt="logo-image" />
    </Link>
    <div className="login-container">
      <h1>sign in</h1>
      <form>
        <h5>Email</h5>
        <input type="email" value="" />
        <h5>Password</h5>
        <input type="password" value="" />
        <button className="login-signInBtn">Sing in</button>
        <p>
          by continuing, you agree to AMazon's FAke clone conditions of use and
          Privacy Notice
        </p>
        <button className="login-registerBtn">
          Create your Amazon Account
        </button>
      </form>
    </div>
  </div>

  );
  
};

export default Login;
