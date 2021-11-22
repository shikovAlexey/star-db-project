import React from "react";

const Row = ({ left, right }) => {
    return (
        <div className='items-person-details'>
            {left}
            {right}
        </div>
    );
}

export default Row;