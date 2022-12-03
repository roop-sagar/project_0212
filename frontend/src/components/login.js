import React from 'react';
import "../register.css"
const Login= () => {
    return(
      <div>
      <div className='formContainer'>
       <div className="formWrapper">
       <span className='logo'>CHITchat</span>
       <span className='register'>Login</span>
               <form>           
                   <input type={"email"} placeholder="e-mail"/>
                   <input type={"password"} placeholder="Password"/>         
                   <button className='signup'>Login</button>
               </form>
               
       <p className='signinPara'>Don't have an account already?<br/>Sign Up now.</p>
       </div>
       
       </div>
   </div>
    );
}

export default Login;