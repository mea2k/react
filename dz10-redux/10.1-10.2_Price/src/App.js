import React from 'react';
import { Provider } from 'react-redux';

import ItemForm from './components/ItemForm';
import ItemsList from './components/ItemsList';
import Filter from './components/Filter';
import { store } from './store'

import './main.css';



const App = () => (
    <Provider store={store}>
        <div>
            <Filter />
            <ItemForm />
            <ItemsList />
        </div>
    </Provider>
);




export default App;