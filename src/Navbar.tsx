import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Root</Link>

                </li>
                <li>
                    <Link to="/Docs">Docs</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
