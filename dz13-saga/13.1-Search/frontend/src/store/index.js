import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import serviceReducer from './serviceReducer'


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})



// запуск корневой saga
sagaMiddleware.run(saga); 