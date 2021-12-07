import React from "react";
import './people-page.css';
import Row from '../row';
import ErrorBoundry from "../error-boundry";
import { PersonList } from "../sw-components/item-lists";
import { PersonDetails } from "../sw-components";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {

    const { id } = match.params;

    return (
        <ErrorBoundry>
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id)} />}
                right={<PersonDetails itemId={id} />}
            />
        </ErrorBoundry>
    );
}

export default withRouter(PeoplePage);