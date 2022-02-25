import { createSlice } from '@reduxjs/toolkit'


// FILTER:
// NAME - фильтрация по имени (ищется вхождение подстроки)
// MINPRICE - фильтрация по цене снизу
// MAXPRICE - фильтрация по цене сверху
const initialState = {
    filter: {}
};



// ПОКА ДЛЯ МЕНЯ ЭТО МАГИЯ
// я привык работать со старым форматом:
//    createStore()
//    combineReducers()
//    itemReducer с switch actions и константами для именования action.types
// А это все какая-то магия

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        // изменение фильтра
        // payload: {name, price}
        setFilter(state, action) {
            state.filter = { ...action.payload };
        },
        // очистка фильтра
        // payload: -
        clearFilter(state, action) {
            state.filter = {};
        },
    },
});



export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;