/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./login.css";
import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth)=>{
      if(auth){
        navigate('/');

      }
    }).catch((error)=>{
      alert(error.message);
    })
  };
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo-image" />
      </Link>
      <div className="login-container">
        <h1>sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn">Sing in</button>
          <p>
            by continuing, you agree to AMazon's FAke clone conditions of use
            and Privacy Notice
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
