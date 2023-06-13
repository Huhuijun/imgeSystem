import { legacy_createStore as createStore,combineReducers } from "redux";
import { CollApsedReducer } from "./CollapsedReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
   // blacklist: ['CollApsedReducer'] // navigation will not be persisted
  }

const reducer=combineReducers({
    CollApsedReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store=createStore(persistedReducer)
const persiststore = persistStore(store)
export {store,persiststore}