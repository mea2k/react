import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import MainPage from './layouts/MainPage';
import ServiceListPage from './layouts/ServiceListPage';
import ServiceItemPage from './layouts/ServiceItemPage';

import { addActionUrl, setMainUrl } from './store/serverReducer';

import './main.css';



const App = () => {
    // проброс state и dispatch
    const dispatch = useDispatch();

    // вызываем один раз
    // и настраиваем все URL
    useEffect(() => {
        // добавление URL сервера
        dispatch(setMainUrl('http://localhost:7070/'))
        dispatch(addActionUrl({
            action: 'services',
            title: 'Список работ',
            url: 'api/services'
        }))
        dispatch(addActionUrl({
            action: 'item',
            title: 'Работа',
            url: 'api/services/'
        }))
    }, []);


    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage />} />
                        <Route path="/services" element={<ServiceListPage />} />
                        <Route path="/services/:id" element={<ServiceItemPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
};




export default App;