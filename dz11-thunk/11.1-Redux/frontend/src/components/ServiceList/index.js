import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../api';
import { statusTypes } from '../../store/storeTypes';
import { setStatus, clearSelectedItem } from '../../store/serviceReducer';
import ErrorBubble from '../Error';
import Loading from '../Loading';
import ListItem from './ListItem';

import './main.css';
import { LoadIcon } from '../icons';


const ServiceList = ({ action }) => {
    // проброс state и dispatch
    const { items, selectedItem, status } = useSelector((state) => state.services);
    const { mainUrl, actions } = useSelector((state) => state.server);
    const dispatch = useDispatch();

    // начальная загрузка данных
    const loadData = () => {
        // очистка выбранного элемента
        dispatch(clearSelectedItem());
        if (mainUrl && actions[action])
            api.getServiceList(mainUrl + actions[action].url)
    }
    // запускается 1 раз
    useEffect(() => {
        loadData();
    }, [mainUrl, action, actions])


    // вызов события - удаление элемента
    const handleDelItem = (id) => {
        api.delServiceItem(mainUrl + actions[action].url + '/' + id, { [id]: id })
            .then((data) => {
                // успех - загрузка списка
                loadData();
            })
            .catch((e) => {
                // статус - ошибка
                dispatch(setStatus(statusTypes.ERROR));
            })
    }

    // Если LOADING и выбранный объект пустой - значит глобальная загрузка
    if (status === statusTypes.LOADING && (!selectedItem || Object.keys(selectedItem).length === 0))
        return <Loading />

    return (
        <div className="list">
            {status === statusTypes.ERROR ? <ErrorBubble /> : ''}
            {items && items.length > 0 ?
                items.map((v) => (
                    <div key={`item_${v.id}`} className="list-item">
                        {status === statusTypes.LOADING && Object.keys(selectedItem)?.includes(String(v.id)) ?
                            (<div className="item-center">
                                <LoadIcon />
                            </div>
                            ) : (
                                <ListItem
                                    key={v.id}
                                    item={v}
                                    actions={[{
                                        id: 'edit',
                                        type: 'edit',
                                        name: 'Изменить',
                                        href: '/' + action + '/' + v.id
                                    }, {
                                        id: 'del',
                                        type: 'del',
                                        name: 'Удалить',
                                        handle: () => handleDelItem(v.id)
                                    }]}
                                />
                            )}
                    </div>
                )) : (
                    <div>Записей нет.</div>
                )}
        </div>
    )
};



export default ServiceList;
//export default withLoading(api.getServiceList)(ServiceList);
