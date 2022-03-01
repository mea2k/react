import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as api from '../../api';
import { setSelectedItemData, setStatus, clearSelectedItem } from '../../store/serviceReducer';
import { statusTypes } from '../../store/storeTypes';
import ErrorBubble from '../Error';
import { LoadIcon } from '../icons';
import Loading from '../Loading';


import './main.css';


const ServiceForm = ({ action }) => {
    // проброс state и dispatch
    const { selectedItem, status } = useSelector((state) => state.services);
    const { mainUrl, actions } = useSelector((state) => state.server);
    const dispatch = useDispatch();

    // параметры из URL
    const { id } = useParams();

    // навигация
    const navigate = useNavigate();
    const location = useLocation();

    // загружаем данные для формы
    useEffect(() => {
        if (mainUrl && actions[action])
            api.getServiceItem(mainUrl + actions[action].url + id)
    }, [mainUrl, action, id, actions])

    // обработчик события изменения компонентов работы
    // (уже без проверки числа на число)
    const handleChangeItemData = (e) => {
        dispatch(setSelectedItemData({ [e.target.name]: e.target.value }));
    }


    // отправка данных
    const submitText = () => {
        if (selectedItem.name) {// если форма не пустая
            // обновление существующего элемента
            api.postServiceFunc(mainUrl + actions[action].url, selectedItem)
                .then((data) => {
                    // статус - успех
                    dispatch(setStatus(statusTypes.SUCCESS));
                    // очистка выбранного элемента
                    dispatch(clearSelectedItem());
                    // переход на главную страницу
                    navigate("/");
                })
                .catch((e) => {
                    // статус - ошибка
                    dispatch(setStatus(statusTypes.ERROR));
                })

        }
    }

    // отмена изменения данных
    const cancelEdit = () => {
        const canGoBack = location.key !== "default";
        // возврат обратно, если есть история
        // иначе - на главную страницу
        if (canGoBack)
            navigate(-1);
        else
            navigate('/');
    }

    // Если LOADING и выбранный объект пустой - значит глобальная загрузка
    if (status === statusTypes.LOADING && (!selectedItem || Object.keys(selectedItem).length === 0))
        return <Loading />

    return (
        <div className="form">
            {status === statusTypes.ERROR ? <ErrorBubble /> : ''}
            <div className="form-item">
                <label htmlFor="timeZone">Наименование работы</label>
                <input
                    type="text"
                    name="name"
                    className="form-input"
                    onChange={handleChangeItemData}
                    value={selectedItem.name}
                    disabled={status === statusTypes.LOADING || status === statusTypes.ERROR ? true : ''}
                />
            </div>
            <div className="form-item">
                <label htmlFor="text">Стоимость работы</label>
                <input
                    type="text"
                    name="price"
                    className="form-input"
                    onChange={handleChangeItemData}
                    value={selectedItem.price}
                    disabled={status === statusTypes.LOADING || status === statusTypes.ERROR ? true : ''}
                />
            </div>
            <div className="form-item">
                <label htmlFor="text">Описание работы</label>
                <input
                    type="text"
                    name="content"
                    className="form-input"
                    multiple
                    onChange={handleChangeItemData}
                    value={selectedItem.content}
                    disabled={status === statusTypes.LOADING || status === statusTypes.ERROR ? true : ''}
                />
            </div>
            <div className="form-button-container">
                <button className="button button-cancel"
                    onClick={cancelEdit}
                    disabled={status === statusTypes.LOADING ? true : ''}
                >
                    Отмена
                </button>
                {status === statusTypes.LOADING ?
                    (<LoadIcon />
                    ) : (
                        <button className="button button-submit"
                            onClick={submitText}
                            disabled={status === statusTypes.LOADING ? true : ''}
                        >
                            {selectedItem.id !== '' ? 'Изменить' : 'Добавить'}
                        </button>
                    )}
            </div>
        </div>
    )
};


export default ServiceForm;