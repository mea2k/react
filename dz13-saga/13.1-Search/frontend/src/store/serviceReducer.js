import { createSlice } from '@reduxjs/toolkit'
import { statusTypes } from './storeTypes';




// SERVICES:
// ITEMS - массив работ {id, name, price }
// SEARCH - фильтр поиска ({name, price})
// STATUS - состояние данных в STORE {'loading', 'error', 'success', 'idle'}
const initialState = {
    items: [],
    search: {},
    status: statusTypes.IDLE
};


const serviceSlice = createSlice({
    name: 'services',
    initialState: initialState,
    reducers: {

        // заполнение массива элементов в случае успеха
        // (с удалением всех старых)
        // payload: -
        requestItems(state, action) {
            state.items = [];
            state.status = statusTypes.LOADING;
        },

        // запрос элемнетов с указанием фильтра поиска(с удалением всех старых)
        // payload: [{id, name, price}...]
        setItemsSuccess(state, action) {
            state.items = action.payload;
            state.status = statusTypes.SUCCESS;
        },

        // статус - ошибка 
        // (с удалением всех старых)
        // payload: -
        setItemsError(state, action) {
            state.items = [];
            state.status = statusTypes.ERROR;
        },


        // Запрос на изменение фильтра поиска 
        // payload: {[param]: value, ...} (param - { name, price })
        requestSearchString(state, action) {
            //state.search = { ...state.search, ...action.payload };
        },

        // Изменение фильтра поиска
        // payload: {[param]: value, ...} (param - { name, price })
        setSearchString(state, action) {
            state.search = { ...state.search, ...action.payload };
            // удаление пустых полей
            Object.keys(state.search).forEach((key) => {
                if (state.search[key] === '')
                    delete state.search[key];
            });
        },

    },
});


export const actions = serviceSlice.actions;
export default serviceSlice.reducer;