import React from "react";
import './toggle-random-planet-btn.css';

const ToggleRandomPlanetBtn = ({ onToggleRandomPlanet }) => {


    return (
        <button
            className='toggle-random-planet-btn btn btn-secondary'
            onClick={onToggleRandomPlanet}
        >
            Toggle random planet
        </button>
    );
}

export default ToggleRandomPlanetBtn;