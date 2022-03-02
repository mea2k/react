import React from 'react';
import PropTypes from 'prop-types'

import './main.css';
import { ActionIcon } from '../icons';
import { NavLink } from 'react-router-dom';

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
                <div key={`item_${v.id}`} className="item-icon">
                    {v.href ? (
                        <NavLink to={v.href} key={`nav_${v.id}`}>
                            <ActionIcon key={`icon_${v.id}`}
                                text={v.name}
                                type={v.type}
                            />
                        </NavLink>
                    ) : (
                            <ActionIcon key={`icon_${v.id}`}
                                text={v.name}
                                type={v.type}
                                handleAction={() => v.handle(item.id)}
                            />
                        )}
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