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


        // Изменение фильтра поиска
        // payload: {[param]: value, ...} (param - { name, price })
        setSearchString(state, action) {
            state.search = { ...state.search, ...action.payload };
        },

        // Очистка строки поиска
        // payload: -
        clearSearchString(state, action) {
            state.search = {};
        },

        // изменение статуса данных в STORE
        // payload: {'loading', 'error', 'success', 'idle'}
        setStatus(state, action) {
            if (Object.values(statusTypes).includes(action.payload))
                state.status = action.payload;
        },
    },
});


export const { requestItems, setItemsSuccess, setItemsError, setSearchString, clearSearchString, setStatus } = serviceSlice.actions;
export default serviceSlice.reducer;