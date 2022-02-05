import PropTypes from 'prop-types'

import './main.css';
import StocksItem from './StocksItem';

const CourseItem = ({ item, date, ...rest }) => (
    <div className="b-inline inline-stocks__item hint__item">
        <a
            className="home-link home-link_black_yes inline-stocks__link"
            href={item.link}
        >
            {item.name}
        </a>
        <span className="inline-stocks__value">
            <span className="inline-stocks__text">
                <span className="inline-stocks__item__baloon b-inline">
                    <i className="inline-stocks__item__baloon__tail"></i>
                    <span className="inline-stocks__item__baloon_inner">цена на {item.date ? item.date : date}</span>
                </span>
            </span>
            <span className="inline-stocks__value_inner">
                {item.value}
            </span>
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
        <div className="a11y-hidden inline-stocks__cell_type_delta-label">{item.delta}{item.unit}</div>
    </div>
);


CourseItem.propTypes = {
    item: PropTypes.object.isRequired,
    date: PropTypes.instanceOf(Date)
};


export default CourseItem;