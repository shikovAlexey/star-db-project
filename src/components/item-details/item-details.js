import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className='list-group-item'>
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

const ItemDetails = (props) => {

    const itemView = () => {
        const { data } = props;

        const { name } = data.item;
        const { item, image } = data;

        return (
            <React.Fragment>
                <img alt='Starship img not found' className='person-image' src={image}></img>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        {
                            React.Children.map(props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    };

    const { data } = props;
    const { loading, error } = props.data;

    if (!data.item) {
        return <span>Select a person from  a list</span>
    }

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const itemViewed = hasData ? itemView() : null;

    return (
        <div className='person-details card'>
            {errorMessage}
            {spinner}
            {itemViewed}
        </div>
    );
};

export default ItemDetails;