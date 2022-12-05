import React from 'react';
import Navbar from './Navbar';
import "./Home.css"
const Home= () => {
    return(
        <div>
            <Navbar/>
            <img className='bgimage' src='https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=""/>
        </div>
    );
}

export default Home;

