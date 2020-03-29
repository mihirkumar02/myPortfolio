import React from 'react';
import me from '.././me.jpg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="nav">
            <div className="container">
                <Link to="/">
                    <img className="me" src={me} alt="That's Me!" />
                </Link>
                <ul>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/achievements">Achievements</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/resume">My Resume</NavLink></li>
                    <li><NavLink to="/contact">Contact Me</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;