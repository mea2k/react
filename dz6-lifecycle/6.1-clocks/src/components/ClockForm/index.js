import { useState } from 'react';
import PropTypes from 'prop-types'

import './main.css';

const ClockForm = ({ countries, timeZone, handleSubmit }) => {

    // переменные для сохранения текущего значения полей формы
    const [curTimeZone, setCurTimeZone] = useState(timeZone);
    const [curCity, setCurCity] = useState('');

    // обработчик события изменения часового пояса TimeZone
    // (параллельно меняется выбранный город из SELECT)
    const handleChangeTimeZone = (e) => {
        setCurTimeZone(Number(e.target.value));
        const city = countries.find((item) => Number(item.value) === Number(e.target.value));
        if (city !== undefined)
            setCurCity(city.name);
        else
            setCurCity('');
    }

    // обработчик изменения города из SELECT
    // (параллельно меняется значения чаосвого пояса TimeZone)
    const handleChangeCity = (e) => {
        setCurTimeZone(e.target.value);
        setCurCity(e.currentTarget.options[e.currentTarget.selectedIndex].text)
    }

    return (
        <div className="form">
            <div className="form-item">
                <label htmlFor="countries">Название</label>
                <select
                    name="countries"
                    className="form-select"
                    value={curTimeZone}
                    onChange={handleChangeCity}
                >
                    <option id="0" value="">--Выберите город--</option>
                    {countries.map((v) => (
                        <option id={v.id} key={v.id} value={v.value}>{v.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-item">
                <label htmlFor="timeZone">Временная зона</label>
                <input
                    type="number"
                    min="-12"
                    max="12"
                    step=".5"
                    name="timeZone"
                    value={curTimeZone}
                    className="form-input"
                    onChange={handleChangeTimeZone}
                />
            </div>
            <div className="form-item">
                <button
                    onClick={() => handleSubmit({ city: curCity, timeZone: curTimeZone })}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
};

ClockForm.propTypes = {
    countries: PropTypes.array,
    timeZone: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
};

ClockForm.defaultProps = {
    timeZone: ''
}


export default ClockForm;