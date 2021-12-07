import React from "react";
import PropTypes from 'prop-types';
import './row.css'

const Row = ({ left, right }) => {
    return (
        <div className='items-person-details'>
            {left}
            {right}
        </div>
    );
}

Row.protoTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;

