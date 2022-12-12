import React from 'react'
import "./dashNav.css"
const DashNav = () => {
  return (
    <div className='dashNav'>
    <span className='dashNavLogo'>CHITchat</span>
    <div className='user'>
    <img src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
    <span>user</span>
    <button>Logout</button>
    </div>  
    </div>
  )
}

export default DashNav
