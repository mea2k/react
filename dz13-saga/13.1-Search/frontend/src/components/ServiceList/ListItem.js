import React from 'react';
import PropTypes from 'prop-types'

import './main.css';

const ListItem = ({ item }) => (
    <div className="item-container">
        <div className="item-content">
            <div className="item-item">
                {item.name}
            </div>
            <div className="item-item">
                {item.price}
            </div>
        </div>
    </div>

);

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number
    })
};


export default ListItem;