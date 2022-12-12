import React from 'react'
import Chat from './Chat'
import DashSidebar from './DashSidebar'
import "./dashboard.css"
const Dashboard = () => {
  return (
    <div className='dashboard'>
    <div className='container'>
    <DashSidebar/>
    <Chat/>
    </div>
    </div>
  )
}

export default Dashboard
