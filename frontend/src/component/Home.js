import React from 'react';
import Navbar from './Navbar';
import "./Home.css"
import homePage from "../images/homePage.jpg"
const Home= () => {
    return(
        <div>
            <Navbar/>
            <img className='bgimage' src={homePage} alt=""/>
        </div>
    );
}

export default Home;

