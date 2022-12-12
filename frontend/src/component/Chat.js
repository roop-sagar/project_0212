import React from 'react'
import AddUser from "../images/add.png"
import "./chat.css"
import Input from './Input'
import Messages from './Messages'
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
      <span className='userName'>User1</span>
      <img className='addUser' src={AddUser} alt=""/>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat