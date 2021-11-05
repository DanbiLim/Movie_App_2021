/* Navigation.js */
import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Navigation;