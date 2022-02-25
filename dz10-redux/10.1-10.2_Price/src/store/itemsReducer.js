import { createSlice } from '@reduxjs/toolkit'


// ���������� ������� - ��� ���������������
let id = 0;
const getID = () => id++;


// ITEMS:
// ITEMS - ������ ����� {id, name, price }
// SELECTEDID - ��������� ������� �� ������� items (�������� ���� id)
const initialState = {
    items: [],
    selectedId: ''
};



// ���� ��� ���� ��� �����
// � ������ �������� �� ������ ��������:
//    createStore()
//    combineReducers()
//    itemReducer � switch actions � ����������� ��� ���������� action.types
// � ��� ��� �����-�� �����

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        // ���������� ������ ��������
        // payload: {name, price}
        // ID ����������� ����
        createItem(state, action) {
            state.items.push({ ...action.payload, id: getID() });
        },
        // ��������� ������������� ��������
        // payload: { id, name, price }
        updateItem(state, action) {
            state.items = state.items.map((item) => item.id === action.payload.id ? action.payload : item);
            state.selectedId = '';
        },
        // �������� ������������� ��������
        // payload: { id } // ������
        deleteItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            // ������� ������������� �������
            if (state.selectedId === action.payload.id)
                state.selectedId = '';

        },
        // ����� �������� ��� ��������
        // payload: id  // �����
        selectItem(state, action) {
            state.selectedId = action.payload;
        }
    },
});



export const { createItem, updateItem, deleteItem, selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;