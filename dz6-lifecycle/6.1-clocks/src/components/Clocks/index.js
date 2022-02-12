import PropTypes from 'prop-types'
import { useState } from 'react';

import ClockData from '../ClockData';
import ClockForm from '../ClockForm';

import './main.css';

var id = 1;
const getID = () => id++;

const Clocks = ({ countries }) => {

    // массив показываемых часов
    const [showCountries, setShowCountries] = useState([]);

    // обработчик добавления часов в массив показываемых
    const handleShowClocks = ({ city, timeZone }) => {
        const label = city + " (GMT " + (timeZone > 0 ? '+' : '') + timeZone + ")";
        setShowCountries((prev) => ([...prev, {
            id: 'c_'+getID(),
            city: city,
            label: label,
            timeZone: Number(timeZone)
        }]));
    }

    // обработчик удаления часов из массива показываемых
    const handleCloseClock = (id) => {
        setShowCountries((prev) => ([...prev.filter((item) => item.id !== id)]));
    }


    return (
        <div>
            <ClockForm
                countries={countries}
                handleSubmit={handleShowClocks}
            />
            <ClockData
                countries={showCountries}
                closeHandle={handleCloseClock}
            />
        </div>
    )
};

Clocks.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string
    })),
};


export default Clocks;