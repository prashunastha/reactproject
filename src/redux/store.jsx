import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { Provider } from "react-redux";
import { personReducer } from "./personReducer";

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import localStorage from "redux-persist/es/storage"; 

//export const myStore = createStore(counterReducer)

const rootReducer= combineReducers({
        counterStore:counterReducer,
        personStore:personReducer
    })

    const persistConfig = {
  key: 'root',
  storage: localStorage ,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const myStore= createStore(persistedReducer)
    let persistor = persistStore(myStore)

export const MyStoreProvider= ({children})=>{
    return<Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
        
    </Provider>
}