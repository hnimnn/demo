import { configureStore, combineReducers } from "@reduxjs/toolkit";
import eventSlice from "./reducers/eventSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { legacy_createStore as createStore } from 'redux';

const allReducers = combineReducers({
   eventReducer: eventSlice.reducer,
})
const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['eventReducer'],
}
const persistedReducer = persistReducer(persistConfig, allReducers)
let store = createStore(persistedReducer)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store