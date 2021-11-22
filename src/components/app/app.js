import React, { Component } from "react";
import './app.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ToggleRandomPlanetBtn from "../toggle-random-planet-btn";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import StarshipsPage from "../starships-page";
import PlanetsPage from "../planets-page";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        toggleRandomPlanet: true,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onToggleRandomPlanet = () => {

        this.setState(({ toggleRandomPlanet }) => {
            return {
                toggleRandomPlanet: !toggleRandomPlanet
            }
        });
    };

    render() {
        const { toggleRandomPlanet, hasError } = this.state;

        const randomPlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

        if (hasError) {
            return <ErrorIndicator />
        }

        const { getPersonImage, getStarshipImage, getPlanetImage } = this.swapiService;

        return (
            <div className='app'>
                <Header />
                {randomPlanet}
                <ToggleRandomPlanetBtn
                    onToggleRandomPlanet={this.onToggleRandomPlanet}
                />
                <PeoplePage getImageUrl={getPersonImage} />
                <StarshipsPage getImageUrl={getStarshipImage} />
                <PlanetsPage getImageUrl={getPlanetImage} />
            </div>
        );
    };
};