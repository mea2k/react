import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, setFilter } from '../../store/filterReducer';

import './main.css';

const Filter = () => {
    // проброс state и dispatch
    const filter = useSelector((state) => state.filter.filter)
    const dispatch = useDispatch();

    // вызов события - изменение фильтра
    // может меняться одно из полей: name, minPrice, maxPrice
    const handleChangeFilter = (e) => {
        dispatch(setFilter({...filter, [e.target.name]: e.target.value }));
    }

    const handleClearFilter = () => {
        dispatch(clearFilter());
    }


    return (
        <div className="filter">
            <div className="filter-item">
                <label htmlFor="name">Наименование</label>
               <input
                    type="text"
                    name="name"
                    className="filter-input"
                    onChange={handleChangeFilter}
                    placeholder="Введите текст..."
                    value={filter?.name || ''}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="minprice">Мин. цена</label>
                <input
                    type="text"
                    name="minPrice"
                    className="filter-input"
                    onChange={handleChangeFilter}
                    placeholder="Мин. цена..."
                    value={filter?.minPrice || ''}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="text">Макс. цена</label>
                <input
                    type="text"
                    name="maxPrice"
                    className="filter-input"
                    onChange={handleChangeFilter}
                    placeholder="Макс. цена..."
                    value={filter?.maxPrice || ''}
                />
            </div>
          <div className="filter-button">
                <button
                    onClick={handleClearFilter}
                >
                    Очистить
                </button>
            </div>
        </div>
    )
};




export default Filter;