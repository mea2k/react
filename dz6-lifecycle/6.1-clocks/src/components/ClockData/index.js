import PropTypes from 'prop-types'
import ClockItem from '../ClockItem';

import './main.css';

const ClockData = ({ countries, closeHandle }) => (
    <div className="form">
        {countries && countries.map((v) => (
            <ClockItem
                key={`${v.city}_${v.gmt}_${v.id}`}
                id={v.id}
                name={v.label}
                timeZone={v.timeZone}
                closeHandle={closeHandle}
            />
        ))}
    </div>
)

ClockData.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        city: PropTypes.string,
        label: PropTypes.string,
        timeZone: PropTypes.number
    })),
    closeHandle: PropTypes.func
};


export default ClockData;