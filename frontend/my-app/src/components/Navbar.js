import React from 'react';

import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Travel Planner</h1>
            <ul>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#about">AboutUs</a></li>
                <Link to='/login'>{"  "} Login</Link>
                
            </ul>
        </nav>
    );
};

export default Navbar;
