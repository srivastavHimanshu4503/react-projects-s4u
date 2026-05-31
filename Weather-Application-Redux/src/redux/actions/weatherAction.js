import { FETCH_CURRENT_ERROR, FETCH_CURRENT_PENDING, FETCH_CURRENT_SUCCESS, FETCH_FORECAST_ERROR, FETCH_FORECAST_PENDING, FETCH_FORECAST_SUCCESS, SET_CITY } from "../constants/weatherConstants";
import { api } from "../../config/axios.js";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city
    }
}

export const fetchCurrentPending = () => {
    return {
        type: FETCH_CURRENT_PENDING
    }
}

export const fetchForecastPending = () => {
    return {
        type: FETCH_FORECAST_PENDING
    }
}

export const fetchCurrentSuccess = (data) => {
    return {
        type: FETCH_CURRENT_SUCCESS,
        payload: data
    }
}

export const fetchForecastSuccess = (data) => {
    return {
        type: FETCH_FORECAST_SUCCESS,
        payload: data
    }
}

export const fetchCurrentError = (error) => {
    return {
        type: FETCH_CURRENT_ERROR,
        payload: error
    }
}

export const fetchForecastError = (error) => {
    return {
        type: FETCH_FORECAST_ERROR,
        payload: error
    }
}

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(fetchCurrentPending())
        dispatch(fetchForecastPending())

        try {
            const response = await api.get(`/weather?q=${city}&appid=${API_KEY}`);
            dispatch(fetchCurrentSuccess(response.data));
            console.log("City response data", response.data);
        } catch (error) {
            dispatch(fetchCurrentError({message: "Something went wrong while fetching current weather", error}))
        } 

        try {
            const response = await api.get(`/forecast?q=${city}&appid=${API_KEY}`);
            dispatch(fetchForecastSuccess(response.data.list));
            console.log("forecast response data list",response.data.list);
        } catch (error) {
            dispatch(fetchForecastError({message: "Something went wrong while fetching forecast", error}))
        } 
    }
} 