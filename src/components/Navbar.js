import React from 'react';
import me from '.././me.jpg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="nav">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img className="me" src={me} alt="That's Me!" />
                    </Link>
                </div>
                <a className="click">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </a>
                <ul className="menu">
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/achievements">Achievements</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/resume">My Resume</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;