import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <h1>Illuminate</h1>
            <nav>
                <Link to="">
                    <button className='nav_btn'>Home</button>
                </Link>
                <Link to="/DiscScreen">
                    <button className='nav_btn'>Discover</button>
                </Link>
                <Link to="/ProjScreen">
                    <button className='nav_btn'>Projects</button>
                </Link>
                <Link to="/ProfScreen">
                    <button className='nav_btn'>Profile</button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;