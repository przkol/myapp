import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { starWars } from "./starWars/reducer";
const rootReducer=combineReducers({starWars
})


const initStore=()=>{
    return configureStore({
        reducer:rootReducer,
        middleware:getDefaultMiddleware=>getDefaultMiddleware({serializableCheck:false})
    })
}


const store=initStore()

export default store


export type RootState=ReturnType<typeof store.getState>