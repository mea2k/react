import React from 'react';

import MainPage from './layouts/MainPage';

import { SERVERURL } from './const';

import './main.css';



const App = () => (
    <div className="container">
        <MainPage url={SERVERURL} />
    </div>
);




export default App;