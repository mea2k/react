import PropTypes from 'prop-types'
import WeatherContent from './WeatherContent';

import './main.css';

const WeatherWidget = ({ id, title, link, linkInfo, link2, linkInfo2, text, data }) => (
    <div className="i-bem widget widget_mode_plain widget_id_weather widget_name_weather widgets__item b-widget-fixed" id="wd-wrapper-_weather">
        <div id={id} key={id} className="b-widget-data b-wrapper">
            <div className="weather" role="complementary" aria-label={title}>
                <h1>
                    <a className="home-link home-link_blue_yes" href={link}>{linkInfo ? linkInfo : title}</a>
                    {link2 && (
                        <a className="home-link home-link_blue_yes" href={link2}>{linkInfo2 ? linkInfo2 : title}</a>
                    )}
               </h1>

                <div className="widget__content weather__content-outer">
                    <WeatherContent {...data} />
                </div>

                {text && (
                    <div className="widget__collapsed-text widget__collapsed">{text}</div>
                )}
            </div>
        </div>
    </div>
);

WeatherWidget.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    linkInfo: PropTypes.string,
    link2: PropTypes.string,
    linkInfo2: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
};

WeatherWidget.defaultProps = {
    title: 'Погода',
    link: 'https://web.archive.org/web/20190731005131/https://yandex.ru/pogoda/washington',
    info: 'Прогноз погоды рядом с вами'
}



export default WeatherWidget;