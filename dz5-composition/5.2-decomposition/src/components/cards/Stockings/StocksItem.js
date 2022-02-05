import PropTypes from 'prop-types'

import './main.css';

const StocksItem = ({ item, date, inline, ...rest }) => (
    <div className={`b-inline inline-stocks__item hint__item ${inline ? 'inline-stocks__part' : ''}`}>
        <a
            className="home-link home-link_black_yes inline-stocks__link"
            href={item.link}
        >
            {item.cur1}&nbsp;{item.cur2}
        </a>
        <span className="inline-stocks__value">
            <span className="inline-stocks__text">
                <span className="inline-stocks__item__baloon b-inline">
                    <i className="inline-stocks__item__baloon__tail"></i>
                    <span className="inline-stocks__item__baloon_inner">курс {item.cur1} на {item.date ? item.date : date}</span>
                </span>
            </span>
            <span className="inline-stocks__value_inner">{item.value}</span>
        </span>
        <span
            className={`inline-stocks__cell inline-stocks__cell_type_delta inline-stocks__cell_change_${item.delta / item.value > 0.05 ? 'up' : item.delta / item.value < -0.05 ? 'down' : 'small'}`}
            aria-hidden="true"
        >
            {item.delta > 0 ? '+' : ''}{item.delta}
            {item.unit &&
                (<span className="inline-stocks__cell_type_delta-prc">{item.unit}</span>)
            }
        </span>
        <div className="a11y-hidden inline-stocks__cell_type_delta-label">{item.delta > 0 ? '+' : ''}{item.delta}{item.unit}</div>
    </div>
);


StocksItem.propTypes = {
    item: PropTypes.object.isRequired,
    date: PropTypes.instanceOf(Date),
    inline: PropTypes.bool
};

StocksItem.defaultProps = {
    inline: false
}


export default StocksItem;