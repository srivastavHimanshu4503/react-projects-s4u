import { FETCH_CURRENT_ERROR, FETCH_CURRENT_PENDING, FETCH_CURRENT_SUCCESS, FETCH_FORECAST_ERROR, FETCH_FORECAST_PENDING, FETCH_FORECAST_SUCCESS, SET_CITY } from "../constants/weatherConstants.js";

const initialState = {
    city: 'Lucknow',
    current: null,
    forecast: null,
    current_loading: false,
    forecast_loading: false,
    current_error: null,
    forecast_error: null
}

export const weatherReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_CITY:
            return { 
                city: action.payload, 
                current: null,
                forecast: null,
                current_loading: true,
                forecast_loading: true,
                current_error: null,
                forecast_error: null,
            }
            break;

        case FETCH_CURRENT_PENDING:
            return { 
                ...state,
                current_loading: true,
                current_error: null,
            }
            break;

        case FETCH_FORECAST_PENDING:
            return { 
                ...state,
                forecast_loading: true,
                forecast_error: null,
            }
            break;
        
        case FETCH_CURRENT_SUCCESS:
            return { 
                ...state,
                current: action.payload,
                current_loading: false
            }
            break;
        
        case FETCH_FORECAST_SUCCESS:
            return { 
                ...state,
                forecast: action.payload,
                forecast_loading: false
            }
            break;

        case FETCH_CURRENT_ERROR:
            return { 
                ...state,
                current_loading: false,
                current_error: action.payload,
            }
            break;

        case FETCH_FORECAST_ERROR:
            return { 
                ...state,
                forecast_loading: false,
                forecast_error: action.payload,
            }
            break;
    
        default:
            return state;
    }

}