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

        // заполнение массива элементов (с удалением всех старых)
        // payload: [{id, name, price}...]
        setItems(state, action) {
            state.items = action.payload 
        },


        // Выбор элемента для удаления
        // payload: id  // ЧИСЛО
        selectItem(state, action) {
            state.selectedItem = action.payload;
        },

        // Изменение полей выбранного элемента
        // (необязательно всех)
        // payload: {[param]: value} (param - {name, price, content})
        setSelectedItemData(state, action) {
            state.selectedItem = { ...state.selectedItem, ...action.payload };
        },

        // Очистка текущего выбранного элемента
        // payload: -
        clearSelectedItem(state, action) {
            state.selectedItem = {};
        },

        // изменение статуса данных в STORE
        // payload: {'loading', 'error', 'success', 'idle'}
        setStatus(state, action) {
            if (Object.values(statusTypes).includes(action.payload))
                state.status = action.payload;
        },
    },
});


// Middleware 
// перед выполнением dispatch и reducer
// меняется status на LOADING
export const changeStatusBefore = (store) => (next) => async (action) => {
    console.log('dispatching', action);
    //store.dispatch(setStatus(statusTypes.LOADING));
    
    let result = next(action);
    return result;
}



export const { setItems, addItem, updateItem, deleteItem, selectItem, setSelectedItemData, clearSelectedItem, setStatus } = serviceSlice.actions;
export default serviceSlice.reducer;