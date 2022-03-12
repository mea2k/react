import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusTypes } from '../../store/storeTypes';
import ErrorBubble from '../Error';
import Loading from '../Loading';
import ListItem from './ListItem';

import './main.css';


const ServiceList = () => {
    // проброс state и dispatch
    const { items, status } = useSelector((state) => state.services);
    const dispatch = useDispatch();


    // Если LOADING - значит загрузка
    if (status === statusTypes.LOADING)
        return <Loading />

    return (
        <div className="list">
            {status === statusTypes.ERROR ? <ErrorBubble /> : ''}
            {items && items.length > 0 ?
                items.map((v) => (
                    <div key={`item_${v.id}`} className="list-item">
                                <ListItem
                                    key={v.id}
                                    item={v}
                                />
                    </div>
                )) : (
                    <div>Записей нет.</div>
                )}
        </div>
    )
};



export default ServiceList;
