import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./variableSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage:sessionStorage, // Specify the storage type (localStorage or sessionStorage)
};

const rootReducer = combineReducers({
  variable: variableReducer, // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;