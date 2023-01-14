import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function Register() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",

  });
  const { username, email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 'ok') {
          alert(res.data.message);
          setData({
            username: "",
            email: "",
            password: "",
          });
          navigate('/login');
        } else {
          alert(res.data.message)
        }
      })
  };

  return (
    <div>
      <Navbar />
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">CHITchat</span>
          <span className="register">Register</span>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Name"
              value={username}
              name='username'
            />
            <input
              type="email"
              onChange={changeHandler}
              placeholder="E-mail"
              value={email}
              name='email'
            />
            <input
              type="password"
              onChange={changeHandler}
              placeholder="Password"
              value={password}
              name='password'
            />
            <button type="submit" className="signup">Sign Up</button>
          </form>

          <p className="loginPara">
            Have an account already? <Link to="/login"><b>Login</b></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
