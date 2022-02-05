import PropTypes from 'prop-types'

import './main.css';

const City = ({ city }) => (
    <div className="col headline__item headline__leftcorner">
        <a className="home-link geolink link_geosuggest_yes home-link_black_yes" href="https://web.archive.org/web/20190731005131/https://yandex.ru/tune/geo/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&amp;nosync=1">
            <div className="geolink__button geolink__button_size_s"></div>
            <span className="geolink__reg">{city}</span>
        </a>
        <a className="home-link headline__privacy link_gray_yes" href="https://web.archive.org/web/20190731005131/https://yandex.ru/legal/confidential/">Конфиденциальность</a>
    </div>
 );


City.propTypes = {
    city: PropTypes.string,
};
City.defaultProps = {
    city: "Москва"
}


export default City;