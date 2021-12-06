import React, { Component } from "react";
import './people-page.css';
import ErrorIndicator from "../error-indicator";
import Row from '../row';
import ErrorBoundry from "../error-boundry";
import { PersonList } from "../sw-components/item-lists";
import { PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {

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
            <PersonList
                onItemSelected={this.onItemSelected}
            >
            </PersonList>
        );
        const personDetails = (
            <PersonDetails itemId={selectedItem} />

        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}