import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='logo'>Star DB</h1>
            <div className='top-panel'>
                <a className='panel-item' href='http://localhost:3000/'>People</a>
                <a className='panel-item' href='http://localhost:3000/'>Planets</a>
                <a className='panel-item' href='http://localhost:3000/'>Starships</a>
            </div>
        </div>
    );

}

export default Header;