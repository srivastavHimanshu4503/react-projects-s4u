import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

const persistedStore = persistStore(store);

export { store, persistedStore };