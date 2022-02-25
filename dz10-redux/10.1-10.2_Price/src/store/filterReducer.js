import { createSlice } from '@reduxjs/toolkit'


// FILTER:
// NAME - ���������� �� ����� (������ ��������� ���������)
// MINPRICE - ���������� �� ���� �����
// MAXPRICE - ���������� �� ���� ������
const initialState = {
    filter: {}
};



// ���� ��� ���� ��� �����
// � ������ �������� �� ������ ��������:
//    createStore()
//    combineReducers()
//    itemReducer � switch actions � ����������� ��� ���������� action.types
// � ��� ��� �����-�� �����

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        // ��������� �������
        // payload: {name, price}
        setFilter(state, action) {
            state.filter = { ...action.payload };
        },
        // ������� �������
        // payload: -
        clearFilter(state, action) {
            state.filter = {};
        },
    },
});



export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;