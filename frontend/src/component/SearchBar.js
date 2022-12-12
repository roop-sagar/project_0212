import React from 'react'
import "./search.css"

const SearchBar = () => {
  return (
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
  )
}

export default SearchBar
