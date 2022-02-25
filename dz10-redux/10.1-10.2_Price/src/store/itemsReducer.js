import { createSlice } from '@reduxjs/toolkit'


// глобальный счетчки - для идентификаторов
let id = 0;
const getID = () => id++;


// ITEMS:
// ITEMS - массив работ {id, name, price }
// SELECTEDID - выбранный элемент из массива items (значение поля id)
const initialState = {
    items: [],
    selectedId: ''
};



// ПОКА ДЛЯ МЕНЯ ЭТО МАГИЯ
// я привык работать со старым форматом:
//    createStore()
//    combineReducers()
//    itemReducer с switch actions и константами для именования action.types
// А это все какая-то магия

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        // добавление нового элемента
        // payload: {name, price}
        // ID добавляется само
        createItem(state, action) {
            state.items.push({ ...action.payload, id: getID() });
        },
        // изменение существующего элемента
        // payload: { id, name, price }
        updateItem(state, action) {
            state.items = state.items.map((item) => item.id === action.payload.id ? action.payload : item);
            state.selectedId = '';
        },
        // удаление существующего элемента
        // payload: { id } // ОБЪЕКТ
        deleteItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            // очищаем редактируемый элемент
            if (state.selectedId === action.payload.id)
                state.selectedId = '';

        },
        // выбор элемента для удаления
        // payload: id  // ЧИСЛО
        selectItem(state, action) {
            state.selectedId = action.payload;
        }
    },
});



export const { createItem, updateItem, deleteItem, selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;