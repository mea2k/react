import { configureStore } from '@reduxjs/toolkit'
import serviceReducer, { changeStatusBefore } from './serviceReducer'
import { URL } from '../const'

export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { URL }
            }
        }).concat(changeStatusBefore),
})


