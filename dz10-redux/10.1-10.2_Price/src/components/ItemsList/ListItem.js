import React from 'react';
import PropTypes from 'prop-types'

import './main.css';

const ListItem = ({ item, actions }) => (
    <div className="item-container">
        <div className="item-content">
            <div className="item-item">
                {item.name}
            </div>
            <div className="item-item">
                {item.price}
            </div>
        </div>
        <div className="item-icons">
            {actions && actions.map((v) => (
                <div key={v.id}
                    className={`item-icon ${v.id}`}
                    onClick={() => v.handle(item.id)}>
                    {v.name}
                </div>
            ))}
        </div>
    </div>
);

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number
    }),
    actions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        handle: PropTypes.func
    }))
};


export default ListItem;