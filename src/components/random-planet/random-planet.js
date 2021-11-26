import React, { Component } from "react";
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    componentDidMount() {

        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(() => {
            this.setState({ loading: true })
            this.updatePlanet();
        }, updateInterval);
    };

    static defaultProps ={
        updateInterval: 10000       
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 10) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    onError = (err) => {
        clearInterval(this.interval);
        this.setState({
            error: true,
            loading: false
        });
    };

    render() {  

        const { planet, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

        return (

            <div className={`random-planet card`}>
                {errorMessage}
                {spinner}
                {content}
            </div>

        );
    };
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className='planet-img' alt='Planet' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div className='planet-info'>
                <h1 className='planet-name'>{name}</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
