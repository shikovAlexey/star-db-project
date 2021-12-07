import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ isLoggedIn }) => {

    const loginLink = !isLoggedIn ? <Link className='panel-item is-logged' to='/login'>Login</Link> : null;
    return (
        <div className='header'>
            <h1 className='logo'>
                <Link className='logo-link' to='/'>StarDB</Link>
            </h1>
            <div className='top-panel'>
                <Link className='panel-item' to='/people/'>People</Link>
                <Link className='panel-item' to='/planets/'>Planets</Link>
                <Link className='panel-item' to='/starships/'>Starships</Link>
                {loginLink}
                <Link className='panel-item' to='/secret'>Secret</Link>
            </div>
        </div>
    );

};

export default Header;