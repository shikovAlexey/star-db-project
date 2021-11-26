import React from "react";
import './item-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const ItemList = (props) => {

    const { data, onItemSelected } = props;

    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = props.children(item);

            return <li className='list-group-item'
                key={id}
                onClick={() => { onItemSelected(id) }}
            >
                {label}
            </li>
        });
    };

    ItemList.defaultProps = {
        onItemSelected: () => { }
    }

    const { error, loading, itemList } = data;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const items = itemList ? renderItems(itemList) : null;

    return (
        <div className='items' >
            <div className='item-list'>
                <ul className='list-group'>
                    {spinner}
                    {errorMessage}
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default ItemList;