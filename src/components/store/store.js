import { configureStore } from "@reduxjs/toolkit";
import signupState from "./signupState";

const store = configureStore({
    reducer: {
        signup: signupState
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;