import { configureStore } from "@reduxjs/toolkit"
import formReducers from "./Slices/FormSlices"

export const store = configureStore({
    reducer:{
        Form: formReducers,
    },
})
