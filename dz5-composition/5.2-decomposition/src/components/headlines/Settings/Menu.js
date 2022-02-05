import PropTypes from 'prop-types'


const Menu = ({ items }) => (
    <ul className="menu menu_theme_normal menu_view_default menu_tone_default menu_size_sx menu_type_navigation i-bem" data-bem="{&quot;menu&quot;:{}}">
        <div className="menu__group" role="group">
            {items.map((item, key) => (
                <li className="menu__list-item" key={key}>
                    <a className="menu__item menu__item_type_link" href={item.link} target="_self" role="link" aria-label={item.name}>
                        <span className="menu__text">{item.name}</span>
                    </a>
                </li>
            ))}
        </div>
    </ul>
);




export default Menu;