import React from 'react'
import DashNav from './DashNav'
import SearchBar from './SearchBar'
import UserChat from './UserChat'
//import "./dashSidebar.css"
const DashSidebar = () => {
  return (
    <div className='dashSidebar'>
     <div className='containerSidebar'>
     <DashNav/>
     <SearchBar/>
     <UserChat/>
     </div>
    </div>
  )
}

export default DashSidebar
