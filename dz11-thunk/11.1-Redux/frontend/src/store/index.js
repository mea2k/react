import { configureStore } from '@reduxjs/toolkit'
import serverReducer from './serverReducer'
import serviceReducer from './serviceReducer'

export const store = configureStore({
    reducer: {
        services: serviceReducer,
        server: serverReducer,
    },
})