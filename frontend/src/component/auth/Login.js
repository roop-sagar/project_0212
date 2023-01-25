import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';


const Login = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let user = sessionStorage.getItem('user');
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate])

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/login', data).then(res => {
      if (res.data.status === 'ok') {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        alert(res.data.message);
        localStorage.clear();
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">CHITchat</span>
          <span className="register">Login</span>
          <form onSubmit={submitHandler}>
            <input
              type={"email"}
              onChange={changeHandler}
              placeholder="e-mail"
              value={email}
              name='email'
            />

            <input type={"password"}
              onChange={changeHandler}
              placeholder="Password"
              value={password}
              name='password'
            />
            <button className="signup">Login</button>
          </form>

          <p className="signinPara">
            Don't have an account already?
            <br />
            <Link to="/register"><b>Sign Up</b></Link> now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;