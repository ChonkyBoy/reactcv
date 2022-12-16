import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="textNavbar">
                <div className="">
                    <Link to="/" className="">
                        <p className="title">Marin Desgrées du Loû</p>
                    </Link>
                </div>
            </div>
            <div className="itemNavbar">
                <Link to="/aboutMe" className="navActive">
                    <span>À propos</span>
                </Link>
                <Link to="/portfolio" className="navActive">
                    <span>Portfolio</span>
                </Link>
                <Link to="/Cv" className="navActive">
                    <span>C.V.</span>
                </Link>

                <Link to="/contact" className="navActive">
                    <span>Me contacter</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;