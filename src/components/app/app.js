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
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StarshipDetails } from "../sw-components";

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

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className='app'>
                            <Header />
                            {randomPlanet}
                            <ToggleRandomPlanetBtn
                                onToggleRandomPlanet={this.onToggleRandomPlanet}
                            />
                            <div className='route'>
                                <Route exact path='/' render={() => <h1>Welcome to starDB</h1>} />
                                <Route exact path='/people/:id?' render={() => <PeoplePage />} />
                                <Route exact path='/planets' render={() => <PlanetsPage />} />
                                <Route exact path='/starships' render={() => <StarshipsPage />} />
                                <Route path='/starships/:id' render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />
                                }} />
                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
};