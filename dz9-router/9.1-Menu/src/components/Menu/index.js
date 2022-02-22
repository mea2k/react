import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import './main.css';

const Menu = ({ data }) => (
    <nav className="menu">
        {data && data.map((v) => (
            <NavLink
                to={v.url}
                key={v.key}
                className={({ isActive }) => 'menu__item ' + (isActive ? 'menu__item-active' : '')}
            >
                {v.title}
            </NavLink>
        ))}
    </nav>
);


Menu.propTypes = {
    data: PropTypes.array,
};


export default Menu;