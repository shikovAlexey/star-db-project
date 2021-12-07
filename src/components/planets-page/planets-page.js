import React, { Component } from "react";
import './planets-page.css';
import ErrorBoundry from "../error-boundry";
import { PlanetList } from "../sw-components/item-lists";
import ErrorIndicator from "../error-indicator";
import { PlanetDetails } from "../sw-components";
import Row from '../row';

export default class PlanetsPage extends Component {

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
            >
            </PlanetList>
        );
        const planetDetails = (
            <PlanetDetails itemId={selectedItem} />

        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={planetDetails} />
            </ErrorBoundry>
        );
    }
}