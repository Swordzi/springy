import React from "react";
import {Link} from "react-router-dom";
import "./Styles/Navbar.scss";

function Navbar() {
    return (
        <header className="Navbar-header">
            <div className="left">
                <p>Sword.today</p>

            </div>

            <nav className="mid">
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Docs">Docs</Link>
                    </li>
                </ul>
            </nav>
            <div className="right">
                <a href="#">Welcome</a>
            </div>
        </header>
    );
}

export default Navbar;
