import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeSlice.js";
import popupReducer from "./popups/popupSlice.js";

const store = configureStore({
    reducer: {
        employee: employeeReducer,
        popup: popupReducer
    }
});

export { store }