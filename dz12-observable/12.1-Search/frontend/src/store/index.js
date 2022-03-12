import { configureStore } from '@reduxjs/toolkit'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic, requestItemsEpic } from '../epics';
import serviceReducer from './serviceReducer'

// настройка EPIC-middleware
const epic = combineEpics(
    changeSearchEpic,
    requestItemsEpic,
);
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },

    middleware: [epicMiddleware]
})



// запуск EPIC
epicMiddleware.run(epic);