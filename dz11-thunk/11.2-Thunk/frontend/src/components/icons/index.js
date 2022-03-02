import React from 'react';

import './main.css';

// Шаблонная иконка
// PARAMS:
//    text - текст подсказки
//    type -  тип иконки (должен быть стиль под нее) {edit, del, ...}
export const ActionIcon = ({ text, type, handleAction }) => (
    <div className={`icon icon-${type}`}
        aria-label={text}
        title={text}
        onClick={handleAction}
    >
    </div>
);

// Шаблонный спиннер
// PARAMS:
//    color - цвет крутилки
export const Spin = ({ color = 'white' }) => (
    <div className="icon-load-ring">
        <div style={{
            border: `8px solid ${color}`,
            borderColor: `${color} transparent transparent transparent`
        }}></div>
        <div style={{
            border: `8px solid ${color}`,
            borderColor: `${color} transparent transparent transparent`
        }}></div>
        <div style={{
            border: `8px solid ${color}`,
            borderColor: `${color} transparent transparent transparent`
        }}></div>
        <div style={{
            border: `8px solid ${color}`,
            borderColor: `${color} transparent transparent transparent`
        }}></div>
    </div>
);

// Иконка редактирования
//   <ActionIcon type='edit' />
// PARAMS:
//    text - текст подсказки
export const EditIcon = ({ text = 'Изменить', handleAction }) => (
    <ActionIcon text={text} type='edit' handleAction={handleAction} />
);

// Иконка удаления
//   <ActionIcon type='del' />
// PARAMS:
//    text - текст подсказки
export const DelIcon = ({ text = 'Удалить', handleAction }) => (
    <ActionIcon text={text} type='del' handleAction={handleAction} />
);

// Иконка загрузки
//   <Spin color='white' />
// PARAMS:
//    text - текст подсказки
export const LoadIcon = ({ text = 'Загрузка...', color='white' }) => (
    <div className="icon" aria-label={text} title={text}>
        <Spin text={text} color={color} />
    </div>
);
