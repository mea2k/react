import PropTypes from 'prop-types'

import './main.css';
import Menu from './Menu';

const MenuItems = [
    {
        link: "#",
        name: "Изменить город"
    }, {
        link: "#",
        name: "Настройки портала"
    }
];


const Settings = () => (
    <div className="head-options2 i-bem">
        <div className="dropdown2 dropdown2_switcher_link i-bem">
            <a className="link i-bem link_black_yes link_pseudo_yes" href="https://web.archive.org/web/20190731005131/https://yandex.ru/tune/search/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&amp;nosync=1" role="button" aria-expanded="false" aria-haspopup="true">
                <span className="link__inner">Настройка</span>
            </a>
            <div className="popup2 popup2_view_default popup2_theme_normal popup2_alt-shadow_yes i-bem">
                <div className="popup2__tail"></div>

                <Menu items={MenuItems} />

            </div>
        </div>
    </div>
);




export default Settings;