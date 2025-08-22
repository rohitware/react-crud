import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../CounterApp/counterSlice"

export const counterStore = configureStore({
    reducer: {
        counter: counterReducer,
    },
})