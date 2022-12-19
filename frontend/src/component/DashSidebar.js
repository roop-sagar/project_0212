import React from 'react'
import UserChat from './UserChat'
import "./dashNav.css"
const DashSidebar = () => {
  return (
    <div className='dashSidebar'>
     <div className='containerSidebar'>
     
     {/* <DashNav/> */}
     <div className='dashNav'>
    <span className='dashNavLogo'>CHITchat</span>
    <div className='user'>
    <img className='userImage' src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
    <span>user</span>
    <button>Logout</button>
    </div>  
    </div>
      
     {/* <SearchBar/> */}
     <div className='searchBar'>
      <div className='searchForm'>
        <input className='searchbarInput' type={"text"} placeholder="search friends"></input>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
        <span>User1</span>
        <p>hello</p>
      </div>
    </div>

     <UserChat/>
     </div>
    </div>
  )
}

export default DashSidebar
