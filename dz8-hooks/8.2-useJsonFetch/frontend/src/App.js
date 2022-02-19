import React from 'react';
import Item from './components/Item';

import './main.css';

const dataUrl = 'http://localhost:7070/data'    // успешное получение данных
const errorUrl = 'http://localhost:7070/error'  // получение ошибки 500
const loadUrl = 'http://localhost:7070/loading' // индикатор загрузки

const App = () => {

    return (
        <div className="container">
            <Item key='data' url={dataUrl} title="DATA" />
            <Item key='error' url={errorUrl} title="ERROR" />
            <Item key='load' url={loadUrl} title="LOADING" />
        </div>
    );
}



export default App;