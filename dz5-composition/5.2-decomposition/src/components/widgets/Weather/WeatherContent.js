import PropTypes from 'prop-types'

import './main.css';

const WeatherContent = ({ img, link, scale, current, tempForecast }) => (
    <div className="weather__content">
        <a
            className="home-link home-link_black_yes weather__grade"
            aria-label={`${current.temp > 0 ? '+' : current.temp < 0 ? '-' : ''}${current.temp} °${scale}, ${current.info}`}
            href={link}
        >
            <div className="weather__icon weather_icon" title={current.info}>
                <img src={img} title={current.info} />
            </div>
            <div className="weather__temp">{current.temp > 0 ? '+' : current.temp < 0 ? '-' : ''}{current.temp}°</div>
        </a>
        <div className="weather__forecast">
            {tempForecast && tempForecast.map((v, key) => (
                <a
                    className="home-link home-link_black_yes"
                    aria-label={`${v.period} ${v.temp > 0 ? '+' : v.temp < 0 ? '-' : ''}${v.temp} °${scale}`}
                    href={link}
                    key={v.id}
                >
                    {v.period}&nbsp;{v.temp > 0 ? '+' : v.temp < 0 ? '-' : ''}{v.temp}°
                    <br key={`br_${v.id}`} />
                </a>
            ))}

        </div>
    </div>
);




WeatherContent.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string,
    scale: PropTypes.string,
    current: PropTypes.shape({
        temp: PropTypes.number,
        info: PropTypes.string,
    }).isRequired,
    tempForecast: PropTypes.arrayOf(PropTypes.shape({
        period: PropTypes.string,
        temp: PropTypes.number
    }))
};




export default WeatherContent;