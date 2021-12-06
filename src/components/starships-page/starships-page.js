import React, { Component } from "react";
import './starships-page.css';
import ErrorIndicator from "../error-indicator";
import Row from '../row';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { StarshipList } from "../sw-components/item-lists";
import { StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {

    swapiService = new SwapiService();

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
            <StarshipList
                onItemSelected={this.onItemSelected}
            />
        );
        const starshipDetails = (
            <StarshipDetails itemId={selectedItem} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={starshipDetails} />
            </ErrorBoundry>
        );
    }
}