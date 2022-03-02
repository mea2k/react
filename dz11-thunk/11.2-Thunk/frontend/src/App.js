import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './layouts/MainPage';
import ServiceListPage from './layouts/ServiceListPage';
import ServiceItemPage from './layouts/ServiceItemPage';

import './main.css';



const App = () => (
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
);




export default App;