import { createSlice } from '@reduxjs/toolkit'
import { statusTypes } from './storeTypes';




// SERVICES:
// ITEMS - массив работ {id, name, price }
// SELECTEDITEM - выбранный элемент из массива items ({id, name, price, content})
// STATUS - состояние данных в STORE {'loading', 'error', 'success', 'idle'}
const initialState = {
    items: [],
    selectedItem: {},
    status: statusTypes.IDLE
};


const serviceSlice = createSlice({
    name: 'services',
    initialState: initialState,
    reducers: {

        // запрос на получение списка работ (с удалением всех старых)
        // статус: LOADING
        // payload: -
        requestItems(state, action) {
            state.items = [];
            state.status = statusTypes.LOADING;
        },

        // заполнение массива работ в случае успеха (с удалением всех старых)
        // статус: SUCCESS
        // payload: [{id, name, price}...]
        setItemsSuccess(state, action) {
            state.items = action.payload;
            state.status = statusTypes.SUCCESS;
        },

        // Неуспешное получение списка работ (с удалением всех старых)
        // статус: ERROR
        // payload: -
        setItemsError(state, action) {
            state.items = [];
            state.status = statusTypes.ERROR;
        },


        // запрос на получение информации по отдельной работе (с удалением старой информации)
        // статус: LOADING
        // payload: ID
        requestItemDetails(state, action) {
            state.selectedItem = {id: action.payload};
            state.status = statusTypes.LOADING;
        },

        // заполнение информации по отдельной работе (с удалением старой информации)
        // статус: SUCCESS
        // payload: {id, name, price, content}
        setItemDetailsSuccess(state, action) {
            state.selectedItem = action.payload;
            state.status = statusTypes.SUCCESS;
        },

        // Неуспешное получение информации по отдельной работе (с удалением старой информации)
        // статус: ERROR
        // payload: ID
        setItemDetailsError(state, action) {
            state.selectedItem = { id: action.payload };
            state.status = statusTypes.ERROR;
        },


        // изменение статуса данных в STORE
        // payload: {'loading', 'error', 'success', 'idle'}
        setStatus(state, action) {
            if (Object.values(statusTypes).includes(action.payload))
                state.status = action.payload;
        },


    },
});


export const { requestItems, setItemsSuccess, setItemsError, requestItemDetails, setItemDetailsSuccess, setItemDetailsError, setStatus } = serviceSlice.actions;
export default serviceSlice.reducer;