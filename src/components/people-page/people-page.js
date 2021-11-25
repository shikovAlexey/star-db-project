import React, { Component } from "react";
import './people-page.css';
import { Record } from "../item-details";
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
            <PersonDetails
                itemId={selectedItem}
            >
                <Record field='gender' label='Gender:' />
                <Record field='eyeColor' label='Eye Color:' />
                <Record field='birthYear' label='Birth year:' />
            </PersonDetails>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}