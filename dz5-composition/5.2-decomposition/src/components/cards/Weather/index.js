import PropTypes from 'prop-types'
import NotifCard from '../../public/NotifCard';

import './main.css';

const WeatherCard = ({ img, link, info, ...rest }) => (
    <NotifCard style="desk-notif-card_weather_yes desk-notif-card_icon_yes desk-notif-card_details_no desk-notif-card_actions_yes desk-notif-card_minified_yes desk-notif-card_animated_yes">
        <div className="desk-notif-card__card  i-swipe-controller" data-card-order="1">
            <a className="home-link desk-notif-card__link" aria-label={info} href={link}></a>
            <div className="desk-notif-card__title desk-notif-card__style_text">{info}</div>
            <div className="desk-notif-card__icon ">
                <img src={img} />
            </div>
        </div>
        <div className="desk-notif-card__action-wrapper">
            <span className="home-link desk-notif-card__action desk-notif-card__action_type_close" title="Закрыть" role="button" tabIndex="0" aria-label="Закрыть">
                <div className="desk-notif-card__action-icon"></div>
            </span>
        </div>
    </NotifCard>
);

WeatherCard.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string,
    info: PropTypes.string,
};

export default WeatherCard;

