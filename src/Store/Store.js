import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./ColorSlice.js"
const store = configureStore({
    reducer: {
        color: colorReducer,
    },
})

export default store;