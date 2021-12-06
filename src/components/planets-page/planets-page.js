import React, { Component } from "react";
import './planets-page.css';
import ErrorIndicator from "../error-indicator";
import Row from '../row';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { PlanetList } from "../sw-components/item-lists";
import { PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItem: 5,
        hasError: false
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };

    render() {
        const { selectedItem, hasError } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        };

        const itemList = (
            <PlanetList
                onItemSelected={this.onItemSelected}
            />
        );
        const starshipDetails = (
            <PlanetDetails itemId={selectedItem} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={starshipDetails} />
            </ErrorBoundry>
        );
    }
}