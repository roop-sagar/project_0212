
import React,{useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [click,setClick]= useState(false);
    const handleClick=()=> setClick(!click)
    
  return (
    <div>
      <nav className='navbar'>
        <div className='navbarContainer'>
        <Link to="/"><h1>CHITchat</h1>
        </Link>
        <ul className={click?"navMenu active":"navMenu"}>
            <li>
                <Link to="/">
                {/* <button> */}
                Home
                {/* </button> */}
                </Link>
            </li>
            <li>
                <Link to="/login">
                {/* <button className='loginButton'> */}
                Login
                {/* </button> */}
                </Link>
            </li>
            <li>
                <Link to="/register">
                {/* <button> */}
                Register
                {/* </button> */}
                </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color:"black"}}/>):
              (<FaBars size={20} style={{color:"black"}}/>)}
            
           
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
