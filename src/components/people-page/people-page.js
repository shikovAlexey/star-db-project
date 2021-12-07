import React from "react";
import './people-page.css';
import Row from '../row';
import ErrorBoundry from "../error-boundry";
import { PersonList } from "../sw-components/item-lists";
import { PersonDetails } from "../sw-components";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {

    const { id } = match.params;

    const onSelectedPersonDetails = (id) => {
        if (id) {
            return <PersonDetails itemId={id} />
        }
        else {
            return <h2>Select some person</h2>;
        };
    };


    return (
        <ErrorBoundry>
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id)} />}
                right={onSelectedPersonDetails(id)}
            />
        </ErrorBoundry>
    );
}

export default withRouter(PeoplePage);