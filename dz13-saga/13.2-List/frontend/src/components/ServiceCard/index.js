import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actions } from '../../store/serviceReducer';
import { statusTypes } from '../../store/storeTypes';
import ErrorBubble from '../Error';
import Loading from '../Loading';


import './main.css';


const ServiceCard = () => {
    // проброс state и dispatch
    const { selectedItem, status } = useSelector((state) => state.services);
    const dispatch = useDispatch();

    // параметры из URL
    const { id } = useParams();

    // навигация
    const navigate = useNavigate();

    // загружаем данные для карточки
    useEffect(() => {
        dispatch(actions.requestItemDetails(id));
    }, [id])



    // Если LOADING и выбранный объект пустой - значит глобальная загрузка
    if (status === statusTypes.LOADING)
        return <Loading />

    return (
        <div className="form">
            {status === statusTypes.ERROR ? <ErrorBubble /> : ''}
            <div className="form-item">
                <label htmlFor="span">Наименование работы</label>
                <span name="name">
                    {selectedItem.name}
                </span>
            </div>
            <div className="form-item">
                <label htmlFor="span">Стоимость работы</label>
                <span name="price">
                    {selectedItem.price}
                </span>
            </div>
            <div className="form-item">
                <label htmlFor="span">Описание работы</label>
                <span name="info">
                    {selectedItem.content}
                </span>
            </div>
            <div className="form-button-container">
                <button className="button button-cancel"
                    onClick={()=>navigate(-1)}
                >
                    Вернуться
                </button>
            </div>
        </div>
    )
};


export default ServiceCard;