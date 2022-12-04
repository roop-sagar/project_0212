import React, { useState } from "react";
import "./Register.css";
import add from "../images/addProfilepic.png";
import { Link } from "react-router-dom";

export default function Register() {
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
  };
  return (
    <div>
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
              name = 'username'
            />
            <input
              type="email"
              onChange={changeHandler}
              placeholder="E-mail"
              value={email}
              name = 'email'
            />
            <input
              type="password"
              onChange={changeHandler}
              placeholder="Password"
              value={password}
              name = 'password'
            />
            <input className="file" id="file" type="file" />
            <label htmlFor="file">
              <img src={add} alt="addProfilePic" />
              <span className="profilePicLabel">Choose a profile pic</span>
            </label>
            <button type="submit" className="signup">Sign Up</button>
          </form>

          <p className="loginPara">
            Have an account already? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
