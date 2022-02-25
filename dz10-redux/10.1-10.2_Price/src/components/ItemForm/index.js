import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createItem, updateItem } from '../../store/itemsReducer';

import './main.css';


const ItemForm = () => {
    // проброс state и dispatch
    const items = useSelector((state) => state.items.items);
    const selectedId = useSelector((state) => state.items.selectedId)
    const dispatch = useDispatch();

    // переменные для сохранения текущего значения полей формы
    const [itemName, setItemName] = useState('');
    const [itemValue, setItemValue] = useState('');

    // обработчик события изменения наименования работы
    const handleChangeName = (e) => {
        setItemName(e.target.value);
    }

    // обработчик события изменения стоимости работы
    // + проверка на число
    const handleChangePrice = (e) => {
        if (!isNaN(parseInt(e.target.value)))
            setItemValue(parseInt(e.target.value));
    }

    // загружаем данные формы, если выбрана существующая запись
    useEffect(() => {
        const item = items.find((e) => e.id === selectedId);
        // если нашли элемент - заполняем форму
        if (item) {
            setItemName(item.name);
            setItemValue(item.price);
        } else {
            // очищаем текущую форму - если не нашли элемент
            setItemName('');
            setItemValue('');
        }
    }, [selectedId, items])

    // отправка данных
    const submitText = () => {
        if (itemName)  // если форма не пустая
            if (selectedId !== '') {
                // обновление существующего элемента
                dispatch(updateItem({
                    id: selectedId,
                    name: itemName,
                    price: itemValue
                }));
            } else {
                // добавление нового элемента   
                dispatch(createItem({
                    name: itemName,
                    price: itemValue
                }));
            }
        // зануление данных в форме
        setItemName('');
        setItemValue('');
    }

    return (
        <div className="form">
            <div className="form-item">
                <label htmlFor="timeZone">Описание работы</label>
                <input
                    type="text"
                    name="text"
                    className="form-input"
                    onChange={handleChangeName}
                    multiple
                    value={itemName}
                />
            </div>
            <div className="form-item">
                <label htmlFor="text">Стоимость работы</label>
                <input
                    type="text"
                    name="text"
                    className="form-input"
                    onChange={handleChangePrice}
                    multiple
                    value={itemValue}
                />
            </div>
            <div className="form-item">
                <button
                    onClick={submitText}
                    disabled={itemName ? '' : true}
                >
                    {selectedId !== '' ? 'Изменить' : 'Добавить'}
                </button>
            </div>
        </div>
    )
};


export default ItemForm;
