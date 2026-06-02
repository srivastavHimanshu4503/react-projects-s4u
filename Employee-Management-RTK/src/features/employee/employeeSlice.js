import { createSlice } from "@reduxjs/toolkit";
import { deleteEmployee, getEmployee, postEmployee, putEmployee } from "./employeeThunk";

const initialState = {
	employees: [],
	favEmployees: [],
    loading: false,
    favorites: false,
    error: null
};

export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
        getFavEmployees: (state, action) => {
            state.favEmployees = [...state.employees.filter(emp => emp.isHighlight == true)]
        },
        toggleFavorites: (state, action) => {
            state.favorites = !state.favorites;
        }
    },
    extraReducers: (builder) => {

        // get Employee action
        builder.addCase(getEmployee.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(getEmployee.fulfilled, (state, action) => {
            state.loading = false
            state.employees = action.payload
        }),
        builder.addCase(getEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // post Employee action
        builder.addCase(postEmployee.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(postEmployee.fulfilled, (state) => {
            state.loading = false
        }),
        builder.addCase(postEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }),

        // put Employee action
        builder.addCase(putEmployee.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(putEmployee.fulfilled, (state) => {
            state.loading = false
        }),
        builder.addCase(putEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }),

        // delete Employee action
        builder.addCase(deleteEmployee.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(deleteEmployee.fulfilled, (state) => {
            state.loading = false
        }),
        builder.addCase(deleteEmployee.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
});

// Action creators are generated for each case reducer function
export const { getFavEmployees, toggleFavorites } = employeeSlice.actions;

export default employeeSlice.reducer;