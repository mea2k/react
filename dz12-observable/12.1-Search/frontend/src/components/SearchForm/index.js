import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../../store/serviceReducer';


import './main.css';


const SearchForm = ({ url }) => {
    // проброс state и dispatch
    const { search, status } = useSelector((state) => state.services);
    const dispatch = useDispatch();



    // обработчик события изменения компонентов работы
    // (уже без проверки числа на число)
    const handleChangeSearchString = (e) => {
        dispatch(setSearchString({ [e.target.name]: e.target.value }));
    }


    return (
        <div className="form">
            <div className="form-item">
                <label htmlFor="timeZone">Наименование работы</label>
                <input
                    type="text"
                    name="name"
                    className="form-input"
                    onChange={handleChangeSearchString}
                    value={search.name || '' }
                    placeholder='Type to search...'
                />
            </div>
            <div className="form-item">
                <label htmlFor="text">Стоимость работы</label>
                <input
                    type="text"
                    name="price"
                    className="form-input"
                    onChange={handleChangeSearchString}
                    value={search.price || ''}
                    placeholder='Type to search...'
                />
            </div>
 
        </div>
    )
};

SearchForm.propTypes = {
    url: PropTypes.string
};


export default SearchForm;