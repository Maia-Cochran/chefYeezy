import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar = () =>{
    return (
        <div className='top-nav-bar'>
            This is where the top navigation bar will go!
            <NavLink to="/" className='link-to-home'>
                <p><button className="home-button">Home</button></p>
            </NavLink>
        </div>
    )
}

export default TopNavBar;