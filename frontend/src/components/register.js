import React from 'react'
import "../register.css"
import add from "../images/addProfilepic.png"
export default function Register() {
  return (
    <div>
       <div className='formContainer'>
        <div className="formWrapper">
        <span className='logo'>CHITchat</span>
        <span className='register'>Register</span>
                <form>
                    <input type={"text"} placeholder="Name"/>
                    <input type={"email"} placeholder="e-mail"/>
                    <input type={"password"} placeholder="Password"/>
                    <input  className='file' id="file" type={"file"}/>
                    <label htmlFor='file'>
                      <img src={add} alt="addProfilePic" />
                      <span className='profilePicLabel'>Choose a profile pic</span>
                    </label>
                    <button className='signup'>Sign Up</button>
                </form>
                
        <p className='loginPara'>Have an account already? Login</p>
        </div>
        
        </div>
    </div>
  )
}
