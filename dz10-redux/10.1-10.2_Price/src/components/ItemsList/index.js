import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, selectItem } from '../../store/itemsReducer';
import ListItem from './ListItem';

import './main.css';

const ItemsList = () => {
    // проброс state и dispatch
    const items = useSelector((state) => state.items.items);
    const filter = useSelector((state) => state.filter.filter);
    const dispatch = useDispatch();

    // вызов события - удаление элемента
    const handleDelItem = (id) => {
        //console.log('DEL - ' + id);
        dispatch(deleteItem({ id }));
    }

    // вызов события - изменение элемента
    const handleEditItem = (id) => {
        //console.log('Edit - ' + id);
        dispatch(selectItem(id));
    }

    return (
        <div className="list">
            {items && items.length > 0 ?
                items.filter((item) => Object.keys(filter).indexOf('name') === -1 || filter.name === '' || (filter && filter.name && item.name.indexOf(filter.name) !== -1))
                    .filter((item) => Object.keys(filter).indexOf('minPrice') === -1 || filter.minPrice === '' || (filter && filter.minPrice && item.price >= Number(filter.minPrice)))
                    .filter((item) => Object.keys(filter).indexOf('maxPrice') === -1 || filter.maxPrice === '' ||(filter && filter.maxPrice && item.price <= Number(filter.maxPrice)))
                     .map((v) => (
                        <ListItem
                            key={v.id}
                            item={v}
                            actions={[{
                                id: 'edit',
                                name: 'Изменить',
                                handle: () => handleEditItem(v.id)
                            }, {
                                id: 'del',
                                name: 'Удалить',
                                handle: () => handleDelItem(v.id)
                            }]}
                        />
                    )) : (
                    <div>Записей нет.</div>
                )}
        </div>
    )
};




export default ItemsList;