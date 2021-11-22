import React from "react";
import './error-indicator.css';
import icon from './death-star.png';


const ErrorIndicator = () => {
    return (

        <div className='error-indicator'>
            <img alt='error-icon' src={icon} />
            <div>
                <h2>Something has gone terebly wrong</h2>
                <span>* but we already sent droids to fix it</span>
            </div>

        </div>
    );
}

export default ErrorIndicator;