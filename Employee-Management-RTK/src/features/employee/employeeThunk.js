import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance.js";

export const getEmployee = createAsyncThunk(
    "employee/getEmployee",
    async (payload, {rejectWithValue}) => {
        try {
            const response = await api.get("/employees");
            return response.data;
        } catch (error) {
            return rejectWithValue(`Something went wrong: ${error}`)
        }
    }
)

export const postEmployee = createAsyncThunk(
    "employee/postEmployee",
    async (payload, {rejectWithValue, dispatch}) => {
        try {
            const response = await api.post("/employees", payload);
            dispatch(getEmployee())
            return response.data;
        } catch (error) {
            return rejectWithValue(`Something went wrong: ${error}`)
        }
    }
)

export const putEmployee = createAsyncThunk(
    "employee/putEmployee",
    async (payload, {rejectWithValue, dispatch}) => {
        try {
            const response = await api.put(`/employees/${payload.id}`, payload.details);
            dispatch(getEmployee())
            return response.data;
        } catch (error) {
            return rejectWithValue(`Something went wrong: ${error}`)
        }
    }
)

export const deleteEmployee = createAsyncThunk(
    "employee/deleteEmployee",
    async (payload, {rejectWithValue, dispatch}) => {
        try {
            const response = await api.delete(`/employees/${payload}`);
            dispatch(getEmployee())
            return response.data;
        } catch (error) {
            return rejectWithValue(`Something went wrong: ${error}`)
        }
    }
)