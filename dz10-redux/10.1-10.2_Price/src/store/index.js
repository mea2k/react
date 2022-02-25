import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterReducer'
import  itemsReducer from './itemsReducer'

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterReducer,
    },
})