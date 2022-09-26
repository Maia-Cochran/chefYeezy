import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar = () =>{
    return (
        <div className='top-nav-bar'>
            <NavLink to="/" className='link-to-home'>
                <p><button className="home-button">Home</button></p>
            </NavLink>
        </div>
    )
}

export default TopNavBar;