import React from 'react'
//import attatch from "../images/attach.png"
import "./chat.css"
const Input = () => {
  return (
    <div className='input'>
      <input className='inputBox' placeholder='Say hi to your friend '/>
      <div className='send'>
      {/* <input type={"file"} style={{display:"none"}} id="file" name="file"/>
      <label htmlFor='file'>
        <img src={attatch} alt=''/>
      </label>  */}
      <button>send</button>
      </div>
    </div>
  )
}

export default Input

