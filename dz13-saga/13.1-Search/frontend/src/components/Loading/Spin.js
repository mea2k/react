import React from 'react';

import './main.css';


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

