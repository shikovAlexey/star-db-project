import React from "react";
import './starships-page.css';
import ErrorBoundry from "../error-boundry";
import { StarshipList } from "../sw-components/item-lists";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
    return (
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(id) => {
                    history.push(id);
                }} />
        </ErrorBoundry>
    );
};

export default withRouter(StarshipsPage);