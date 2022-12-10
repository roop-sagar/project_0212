import React,{useState} from "react";
import "./Register.css";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';


const Login = () => {
  let navigate = useNavigate();
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
    console.log(data);
    axios.post('http://localhost:5000/login',data).then(res =>{
      alert(res.data)
      if(res.data === 'success'){
        navigate('/profile');
      } else {alert('Invalid details')}
    })
  };

  return (
      <div>
      <Navbar/>
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
            name = 'email'
            />

            <input type={"password"} 
            onChange={changeHandler}
            placeholder="Password" 
            value={password}
            name = 'password'
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


